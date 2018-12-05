import merge from 'lodash/merge';

import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE
} from '../actions/conversation_actions';

import { RECEIVE_CHANNEL_INFO } from '../actions/channel_actions';

export default (state={}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_CHANNEL_INFO:
      let retVal = action.messages || {};
      return retVal;
    case RECEIVE_MESSAGE:
      let newState = merge({},state,{[action.message.id]: action.message});
      return newState;
    default:
      return state;
  }
};
