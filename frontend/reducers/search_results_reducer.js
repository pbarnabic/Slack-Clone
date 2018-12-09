import {RECEIVE_SEARCH_RESULTS} from '../actions/search_actions';

const searchResultsReducer = (state ={authors: {}, message: {}}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      let newState = action.results
      if(Object.keys(newState).length === 0 && newState.constructor === Object){
        return {authors: {}, message: {}};
      }
      return newState;
    default:
      return state;
  }
}

export default searchResultsReducer;
