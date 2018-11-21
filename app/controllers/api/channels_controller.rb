class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def create

    @channel = Channel.new(admin_id: current_user.id, channel_name: params[:channel][:channel_name])
    if @channel.save
      @channel_membership = ChannelMembership.new(user_id: current_user.id, channel_id: @channel.id)
      if @channel_membership.save
        render "api/channels/show"
      else
        Channel.destroy(@channel.id)
        render json: @channel_membership.errors.full_messages, status: 422
      end
    else
     render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = current_user.channels.find(params[:id])
  end

  def index
    @channels = Channel.all
  end

  def fetchOne
    @channel = current_user.channels.last
    render :show
  end

  def fetchChannelUsers
    @channel = Channel.find(params[:id])
    @memberships = @channel.users
    render 'api/channels/fetchChannelUsers'
  end

  def fetchForeignChannels
    @channels = Channel.all - current_user.channels
    render 'api/channels/index'
  end

  def channelMessages
    @channel = current_user.channels.find(params[:id])
    @messages = @channel.messages
    render 'api/messages/index'
  end

  private

  def channel_params
    params.require(:channel).permit(:channel_name)
  end
end
