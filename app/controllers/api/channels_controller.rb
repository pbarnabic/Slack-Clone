class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def create

    @channel = Channel.new(admin_id: current_user.id, channel_name: params[:channel][:channel_name])
    @channel.is_direct_message = false
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
    @channel = Channel.find(params[:id])
  end

  def index
    @channels = Channel.all.select{|channel| channel.is_direct_message == false}
  end

  def fetchOne
    @channel = current_user.channels.last
    render :show
  end


  def fetchChannelInfo
    @channel = Channel.find(params[:id])
    @messages = @channel.messages
    @memberships = @channel.users
    render 'api/channels/info'
  end

  private

  def channel_params
    params.require(:channel).permit(:channel_name)
  end
end
