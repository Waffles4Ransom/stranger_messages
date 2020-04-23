class MessagesController < ApplicationController 

  def index 
    messages = Message.all 
    render json: messages.to_json(:include => { :user => {:only => [:id, :username]}}, :except => [:created_at, :updated_at, :user_id])
  end 

  def show 
    message = Message.find(params[:id])
    if message 
      render json: message, except: [:created_at, :updated_at]
    else 
      render json: { message: "Message not found"}
    end 
  end 

  def create 
    message = Message.new(message_params)
    if message.save 
      render json: message, except: [:created_at, :updated_at]
    else 
      render json: { errors: message.errors}
    end 
  end 

  private 

  def message_params
    params.require(:message).permit(:name, :content, :user_id)
  end   

end 