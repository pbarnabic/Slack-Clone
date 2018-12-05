class Api::DirectMessagesController < ApplicationController

  def index
    direct_messages = current_user.channels
    @channels = direct_messages.select{|channel| channel.is_direct_message == true}
  end


  def create
    #Channel.new(admin_id: current_user.id, channel_name: params[:channel][:channel_name])
    @users = params[:dm][:channel][:user_ids].map{|id| User.find(id)}
    channel_name = @users[0,3].map{|user| user.username}.join(",")
    @channel = Channel.new(admin_id: current_user.id, channel_name: channel_name)
    @channel.is_direct_message = true

    if @channel.save
      @users.each do |user|
        channel_membership = ChannelMembership.new(user_id: user.id, channel_id: @channel.id)
        if channel_membership.save
          next
        else
          render json: channel_membership.errors.full_messages, status: 422
        end
      end
      channel_membership = ChannelMembership.new(user_id: current_user.id, channel_id: @channel.id)
      if channel_membership.save
        #here is where we will broadcast
        data = render :show
        @users.each do |user|
          ChatsChannel.broadcast_to user, data
          head :ok
        end
        #broadcasting should be taken care of
        # render "api/direct_messages/show"
      else
        render json: channel_membership.errors.full_messages, status: 422
      end
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = current_user.channels.find(params[:channel][:channel_id])
  end


  def dm_candidates
    @candidates = []
    current_user.channels.each do |channel|
      channel.users.each do |candidate|
        @candidates.push(candidate) unless candidate.id == current_user.id
      end
    end
    @candidates.uniq!
  end

end
