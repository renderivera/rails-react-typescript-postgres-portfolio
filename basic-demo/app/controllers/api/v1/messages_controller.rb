class Api::V1::MessagesController < ApplicationController
  def index
    render json: Message.all
  end
  
  def create (message_params)
    Message.create(message_params)
  end

  private
  def message_params
    params.require(:message).permit(:user, :message)
  end
end