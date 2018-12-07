import {
  ADD_TO_SEARCH
} from '../actions/search_actions';

const recentSearchesReducer = (state =[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_TO_SEARCH:
      let newState = state.slice();
      newState.push(action.search);
      return newState;
    default:
      return state;
  }
}

export default recentSearchesReducer;
