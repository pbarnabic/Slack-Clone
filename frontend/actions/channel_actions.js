import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors: errors
});

export const clearChannelErrors = () => ({
  type: CLEAR_CHANNEL_ERRORS
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel: channel
})
export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels: channels
});

export const fetchChannel = (id) => dispatch => (
  ChannelAPIUtil.fetchChannel(id).then(channel => (
    dispatch(receiveChannel(channel))
  ), err => (
    dispatch(receiveChannelErrors(err.responseJSON))
  ))
);

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels().then(channels => (
    dispatch(receiveChannels(channels))
  ), err => (
    dispatch(receiveChannelErrors(err.responseJSON))
  ))
);

export const createChannel = (channel) => dispatch => (
  ChannelAPIUtil.createChannel(channel).then(channel =>(
    dispatch(receiveChannel(channel))
  ), err => (
    dispatch(receiveChannelErrors(err.responseJSON))
  ))
);

export const fetchDefault = () => dispatch => (
  ChannelAPIUtil.fetchDefaultChannel().then(channel => (
    dispatch(receiveChannel(channel))
  ), err => (
    dispatch(receiveChannelErrors(err.responseJSON))
  ))
);
