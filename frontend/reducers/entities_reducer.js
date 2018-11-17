import { combineReducers } from 'redux';

import users from './users_reducer';
import channels from './channels_reducer';

export default combineReducers({
  users,
  channels
});
