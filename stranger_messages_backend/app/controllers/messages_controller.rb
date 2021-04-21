class MessagesController < ApplicationController 

  def index 
    messages = Message.all.preload(:user) 
    render json: messages.to_json(:include => { :user => {:only => [:id, :username]}}, :except => [:created_at, :updated_at, :user_id])
  end 

  def create 
    message = Message.new(message_params)
    if message.save 
      render json: message.to_json(:include => { :user => {:only => [:id, :username]}}, :except => [:created_at, :updated_at, :user_id])
    else 
      render json: { errors: message.errors.full_messages}, status: 400
    end 
  end 

  def destroy 
    message = Message.find(params[:id])
    message.destroy
  end 

  private 

  def message_params
    params.require(:message).permit(:name, :content, :user_id)
  end   

end 