import { combineReducers } from 'redux';

import users from './users_reducer';
import channels from './channels_reducer';
import messages from './messages_reducer';
import directMessages from './direct_messages_reducer';
import dmUsers from './dm_users_reducer';

export default combineReducers({
  users,
  channels,
  messages,
  directMessages,
  dmUsers
});
