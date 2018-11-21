class MessagesChannel < ApplicationCable::Channel
  def subscribed
    conversation = Channel.find(params[:conversation])
    stream_for conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
