class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]

  # GET /groups
  def search
    uri = URI("https://graph.facebook.com/v2.8/search")
  	search_params = {
		  :q => params[:q],
  		:type => "group",
  		:access_token => Figaro.env.fb_app_user_token
    }
    uri.query = URI.encode_www_form(search_params)
    @response = Net::HTTP.get(uri)

    render json: @response
  end

  def update_posts
    # https://graph.facebook.com/v2.8/192228117567250/feed?access_token=243000339457993|MaH2-0IIv_ov8BcKC2v-mbCgxuo&limit=100
    # &fields=full_picture,picture,id,message,name,caption,description,updated_time,link,icon,from,privacy,type,status_type,application,object_id,story,story_tags,actions
    # "full_picture,id,message,updated_time,link,from,application,story,story_tags,actions"
    @per_page = 30
    group = Group.find(params[:group_id])
    uri = URI("https://graph.facebook.com/v2.8/#{group.fb_group_id}/feed")
    post_params = {
      :access_token => Figaro.env.fb_app_user_token,
      :limit => 100,
      :fields => "id,message,updated_time,link,from,story"
    }
    @posts = []
    uri.query = URI.encode_www_form(post_params)
    @feed = JSON.parse(Net::HTTP.get(uri))


    while @feed["data"].present? do
      next_url = URI.parse(@feed["paging"]["next"])
      @posts.concat(@feed["data"])
      @feed = JSON.parse(Net::HTTP.get(next_url))
    end

    @posts = @posts.map do |post|
      postFormatted = {}
      postFormatted["message"] = post["message"]
      postFormatted["updated_time"] = post["updated_time"]
      postFormatted["fb_post_id"] = post["id"]
      postFormatted["link"] = post["link"]
      postFormatted["group_id"] = group.id
      postFormatted["from"] = post["from"]
      postFormatted
    end

    @data = {
      data: @posts.take(@per_page),
      total: @posts.count
    }

    # @posts = @posts.map do |post| 
    #   post["uid"] = post["id"].partition("_")[0]
    #   post["pid"] = post["id"].partition("_")[2]

    #   if !post["message"] && post["story"]
    #     post["message"] = post["story"]
    #   end
      
    #   post.except(:from)
    # end
    Post.delete_all

    if Post.create(@posts)
      render json: @data
    else
      render json: @posts.errors, status: :unprocessable_entity
    end

  end
  
  def index
  	@groups = Group.all
    render json: @groups
  end

  # GET /groups/1
  def show
    @per_page = 30
    posts = @group.posts.paginate(:page => params[:page], :per_page => @per_page)
    data = {
      group: @group,
      posts: posts
    }

    render json: data
  end

  # POST /groups
  def create
    @group = Group.new(group_params)

    if @group.save
      render json: @group, status: :created, location: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    if @group.update(group_params)
      render json: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  def destroy
    @group.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def group_params
      params.require(:group).permit(:name, :fb_group_id)
    end
end
