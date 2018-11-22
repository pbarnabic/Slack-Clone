import {RECEIVE_DM_CANDIDATES} from '../actions/direct_message_actions';

const dmUsersReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DM_CANDIDATES:
      return action.users;
    default:
      return state;
  }
};

export default dmUsersReducer;
