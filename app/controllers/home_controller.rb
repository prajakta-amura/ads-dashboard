class HomeController < ApplicationController
	def index
		
	end

	def info
		  render json: {msg:"welcome"}
	end
end
