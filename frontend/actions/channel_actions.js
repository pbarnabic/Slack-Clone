import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';
export const RECEIVE_CHANNEL_USERS = 'RECEIVE_CHANNEL_USERS';
export const RECEIVE_CHANNEL_INFO = 'RECEIVE_CHANNEL_INFO';

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

export const receiveChannelUsers = users => ({
  type: RECEIVE_CHANNEL_USERS,
  users: users
});

export const receiveChannelInfo = info => ({
  type: RECEIVE_CHANNEL_INFO,
  messages: info.messages,
  users: info.users
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

export const fetchChannelUsers = (id) => dispatch =>(
  ChannelAPIUtil.fetchChannelUsers(id).then(users =>(
    dispatch(receiveChannelUsers(users))
  ))
);

export const fetchDefault = () => dispatch => (
  ChannelAPIUtil.fetchDefaultChannel().then(channel => (
    dispatch(receiveChannel(channel))
  ), err => (
    dispatch(receiveChannelErrors(err.responseJSON))
  ))
);

export const fetchForeignChannels = () => dispatch => (
  ChannelAPIUtil.fetchForeignChannels().then(channels => (
    dispatch(receiveChannels(channels))
  ))
);

export const createChannelMembership = (channel) => dispatch =>(
  ChannelAPIUtil.createChannelMembership(channel).then(channel =>(
    dispatch(receiveChannel(channel))
  ))
);

export const fetchChannelInfo = (id) => dispatch => (
  ChannelAPIUtil.fetchChannelInfo(id).then(info => (
    dispatch(receiveChannelInfo(info))
  ))
);
