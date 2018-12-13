import {SHOW_MODAL, HIDE_MODAL, SHOW_DM_MODAL, HIDE_DM_MODAL,SHOW_RECENT_SEARCH_MODAL,HIDE_RECENT_SEARCH_MODAL,SHOW_SEARCH_RESULTS_MODAL,HIDE_SEARCH_RESULTS_MODAL, SHOW_SIRI_MODAL, HIDE_SIRI_MODAL} from '../actions/modal_actions';

const modalsReducer = (state = {show: "hidden-modal", showDM: "hidden-dm-modal",recentSearchModal: "hidden-recent-search-modal",searchResultsModal: "hidden-search-results-modal", siriModal:"hidden-siri-modal"}, action) => {

  Object.freeze(state);
  switch(action.type){
    case SHOW_MODAL:
      return {show: "visible-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    case HIDE_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal",searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    case SHOW_DM_MODAL:
      return {show: "hidden-modal", showDM: "visible-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    case HIDE_DM_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    case HIDE_RECENT_SEARCH_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    case SHOW_RECENT_SEARCH_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "visible-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    case HIDE_SEARCH_RESULTS_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    case SHOW_SEARCH_RESULTS_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "visible-search-results-modal", siriModal : "hidden-siri-modal"};
    case SHOW_SIRI_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "visible-siri-modal"};
    case HIDE_SIRI_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal" ,searchResultsModal: "hidden-search-results-modal", siriModal : "hidden-siri-modal"};
    default:
      return state;
  }
};

export default modalsReducer;
