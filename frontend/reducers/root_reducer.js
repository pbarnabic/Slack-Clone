import { combineReducers } from 'redux';
import session from './session_reducer';


const rootReducer = combineReducers({
  session: session
});

export default rootReducer;
