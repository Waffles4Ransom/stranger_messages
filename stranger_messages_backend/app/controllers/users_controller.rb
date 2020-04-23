class UsersController < ApplicationController

  def index 
    users = User.all 
    render json: users, except: [:created_at, :updated_at]
  end 

  def create 
    binding.pry
    user = User.new(user_params)
    if user.save 
      render json: user
    else
      # render json: errors: user.errors
    end  
  end 

  private 

  def user_params 
    params.require(:user).permit(:username)
  end 

end 