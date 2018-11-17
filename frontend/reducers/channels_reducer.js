import merge from 'lodash/merge';

import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS
} from '../actions/channel_actions';

const channelsReducer = (state ={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      let newChannel = {[action.channel.id]: action.channel};
      return merge({},state,newChannel);
    case RECEIVE_CHANNELS:
      return action.channels
    default:
      return state;
  }
}

export default channelsReducer;
