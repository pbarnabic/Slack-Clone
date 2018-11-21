import {SHOW_MODAL, HIDE_MODAL} from '../actions/modal_actions';

const modalsReducer = (state = {show: "hidden-modal"}, action) => {
  
  Object.freeze(state);
  switch(action.type){
    case SHOW_MODAL:
      return {show: "visible-modal"};
    case HIDE_MODAL:
      return {show: "hidden-modal"};
    default:
      return state;
  }
};

export default modalsReducer;
