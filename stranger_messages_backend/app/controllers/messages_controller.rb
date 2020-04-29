class MessagesController < ApplicationController 

  def index 
    messages = Message.all 
    render json: messages.to_json(:include => { :user => {:only => [:id, :username]}}, :except => [:created_at, :updated_at, :user_id])
  end 

  def show 
    message = Message.find(params[:id])
    if message 
      render json: message.to_json(:include => { :user => {:only => [:id, :username]}}, :except => [:created_at, :updated_at, :user_id])
    else 
      render json: { message: "Message not found"}
    end 
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