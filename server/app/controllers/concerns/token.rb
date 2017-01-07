require "net/http"
require "uri"

module Token
	extend ActiveSupport::Concern
	def get_access_token
		uri = URI("https://graph.facebook.com/v2.8/oauth/access_token")
		params = { 
      :client_id => ENV["fb_app_id"], 
      :client_secret => ENV["fb_app_secret"], 
      :grant_type => "client_credentials" 
    }
		uri.query = URI.encode_www_form(params)
		response = Net::HTTP.get(uri)
    access_token = JSON.parse(response)["access_token"]
    access_token
	end
end

