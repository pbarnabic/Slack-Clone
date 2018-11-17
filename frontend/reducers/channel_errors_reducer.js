import {RECEIVE_CHANNEL_ERRORS,
        CLEAR_CHANNEL_ERRORS,
        RECEIVE_CHANNEL,
        RECEIVE_CHANNELS
      } from '../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case RECEIVE_CHANNEL:
      return [];
    case RECEIVE_CHANNELS:
      return [];
    case CLEAR_CHANNEL_ERRORS:
      return [];
    default:
      return state;
  }
};
