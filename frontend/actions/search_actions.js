import * as SearchApiUtil from '../util/search_api_util';
export const ADD_TO_SEARCH = "ADD_TO_SEARCH";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const addToSearch = search => ({
  type: ADD_TO_SEARCH,
  search: search
});

export const receiveResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results: results
});

export const search = (str) => dispatch => (
  SearchApiUtil.search(str).then(results => (
    dispatch(receiveResults(results))
  ))
);
