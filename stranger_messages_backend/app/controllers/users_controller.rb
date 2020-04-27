class UsersController < ApplicationController

  def index 
    users = User.all 
    render json: users, except: [:created_at, :updated_at]
  end 

  def create 
    user = User.new(user_params)
    if user.save 
      render json: user
    else
      # binding.pry
      render json: { errors: user.errors.full_messages }, status: 400
    end  
  end 

  private 

  def user_params 
    params.require(:user).permit(:username)
  end 

end 