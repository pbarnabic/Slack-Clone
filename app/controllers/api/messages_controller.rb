class Api::MessagesController < ApplicationController
  def create

   @message = Message.new(message_params)
   debugger
   @message.user_id = current_user.id

   channel = Channel.find(message_params[:channel_id])
   if @message.save
     data = render :show
     MessagesChannel.broadcast_to channel, data
     head :ok
   end
 end

 private

 def message_params
   params.require(:message).permit(:body, :channel_id)
 end
end
