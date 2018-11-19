import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECIEVE_CHANNEL_USERS} from '../actions/channel_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECIEVE_CHANNEL_USERS:
      return {users: action.users};
    default:
      return state;
  }
};

export default usersReducer;
