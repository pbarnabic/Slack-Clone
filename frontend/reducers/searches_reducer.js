import { combineReducers } from 'redux';

import recentSearches from './recent_searches_reducer';
import searchResults from './search_results_reducer';

export default combineReducers({
  recentSearches,
  searchResults
});
