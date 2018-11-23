import merge from 'lodash/merge';

import {
  RECEIVE_DIRECT_MESSAGE,
  RECEIVE_DIRECT_MESSAGES
} from '../actions/direct_message_actions';

const dmsReducer = (state ={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DIRECT_MESSAGE:
      let newChannel = {[action.dms.id]: action.dms};
      return merge({},state,newChannel);
    case RECEIVE_DIRECT_MESSAGES:
      return action.dms;
    default:
      return state;
  }
}

export default dmsReducer;
