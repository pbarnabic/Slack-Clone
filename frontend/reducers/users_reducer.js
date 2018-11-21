import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_CHANNEL_USERS, RECEIVE_CHANNEL_INFO} from '../actions/channel_actions';


const usersReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_CHANNEL_USERS:
      return action.users;
    case RECEIVE_CHANNEL_INFO:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
