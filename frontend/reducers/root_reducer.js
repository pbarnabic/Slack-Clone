import { combineReducers } from 'redux';
import session from './session_reducer';
import entities from './entities_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  session: session,
  entities: entities,
  errors: errors
});

export default rootReducer;