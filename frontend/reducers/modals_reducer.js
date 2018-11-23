import {SHOW_MODAL, HIDE_MODAL, SHOW_DM_MODAL, HIDE_DM_MODAL} from '../actions/modal_actions';

const modalsReducer = (state = {show: "hidden-modal", showDM: "hidden-dm-modal"}, action) => {

  Object.freeze(state);
  switch(action.type){
    case SHOW_MODAL:
      return {show: "visible-modal", showDM: "hidden-dm-modal"};
    case HIDE_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal"};
    case SHOW_DM_MODAL:
      return {show: "hidden-modal", showDM: "visible-dm-modal"};
    case HIDE_DM_MODAL:
      return {show: "hidden-modal", showDM: "hidden-dm-modal"};
    default:
      return state;
  }
};

export default modalsReducer;
