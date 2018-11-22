class Api::MessagesController < ApplicationController
  def create

   @message = Message.new(message_params)

   @message.user_id = current_user.id
   
   channel = Channel.find(message_params[:channel_id])
   if @message.save
     # serialized_data = ActiveModelSerializers::Adapter::Json.new(
     #   MessageSerializer.new(message)
     # ).serializable_hash
     # serialized_data[:username] = current_user.username
     #
     # data = ApplicationController.renderer.render(partial: 'api/messages/message.json.jbuilder', locals: {message: message})
     data = render :show
     # data = ApplicationController.render :show
     MessagesChannel.broadcast_to channel, data
     head :ok
   end
 end

 private

 def message_params
   params.require(:message).permit(:body, :channel_id)
 end
end
