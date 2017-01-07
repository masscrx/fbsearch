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

  def posts
    group = Group.find(params[:group_id])
    uri = URI("https://graph.facebook.com/v2.8/#{group.fb_group_id}/feed")
    post_params = {
      :access_token => Figaro.env.fb_app_user_token,
      :limit => 100
    }
    uri.query = URI.encode_www_form(post_params)
    @response = JSON.parse(Net::HTTP.get(uri))["data"]

    #@posts = Post.where(group: group).map do |post| 
    #  post.as_json
    #end

    @posts = @response.map do |post| 
      post["uid"] = post["id"].partition("_")[0]
      post["pid"] = post["id"].partition("_")[2]
      post
    end

    render json: @posts
  end

  def index
  	@groups = Group.all
    render json: @groups
  end

  # GET /groups/1
  def show
    render json: @group
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
