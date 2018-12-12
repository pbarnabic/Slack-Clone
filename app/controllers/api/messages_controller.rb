class Api::MessagesController < ApplicationController
  def create

   @message = Message.new(message_params)

   @message.user_id = current_user.id

   channel = Channel.find(message_params[:channel_id])
   if @message.save
     data = render :show
     MessagesChannel.broadcast_to channel, data
     head :ok
   end
 end


 def search
   query = params[:query];
   @resultingMessages = current_user.received_messages.select{|message| message.body.include?(query)}
   unless @resultingMessages.empty?
     @resultingAuthors = current_user.contacts
   else
     @resultingAuthors = []
   end

   render 'api/messages/search_results'

 end



 private

 def message_params
   params.require(:message).permit(:body, :channel_id, :is_url)
 end
end
