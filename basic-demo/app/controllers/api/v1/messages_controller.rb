class Api::V1::MessagesController < ApplicationController
  def index
    render json: Message.all
  end
  
  def create (message_params)
    message = Message.create(message_params)
    render json: message
  end

  private
  def message_params
    params.require(:message).permit(:user, :message)
  end
end