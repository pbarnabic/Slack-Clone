import {SHOW_MODAL, HIDE_MODAL, SHOW_DM_MODAL, HIDE_DM_MODAL,SHOW_RECENT_SEARCH_MODAL,HIDE_RECENT_SEARCH_MODAL} from '../actions/modal_actions';

const modalsReducer = (state = {show: "hidden-modal", showDM: "hidden-dm-modal"}, action) => {

  Object.freeze(state);
  switch(action.type){
    case SHOW_MODAL:
      return {show: "visible-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal"};
    case HIDE_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal"};
    case SHOW_DM_MODAL:
      return {show: "hidden-modal", showDM: "visible-dm-modal", recentSearchModal: "hidden-recent-search-modal"};
    case HIDE_DM_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal"};
    case HIDE_RECENT_SEARCH_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "hidden-recent-search-modal"};
    case SHOW_RECENT_SEARCH_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal", recentSearchModal: "visible-recent-search-modal"};
    default:
      return state;
  }
};

export default modalsReducer;
