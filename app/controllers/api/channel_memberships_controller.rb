class Api::ChannelMembershipsController < ApplicationController
  def create
    @channel_membership = ChannelMembership.save(user_id: current_user.id, channel_id: @channel.id)
    if @channel_membership.save
      render "api/channels/show"
    else
      render json: @channel_membership.errors.full_messages, status: 422
    end
  end
end
