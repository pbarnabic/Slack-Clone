export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const SHOW_DM_MODAL = "SHOW_DM_MODAL";
export const HIDE_DM_MODAL = "HIDE_DM_MODAL";

export const showModal = () => dispatch => {
  dispatch({
    type: SHOW_MODAL
  });
}

export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL
  });
}

export const showDMModal = () => dispatch => {
  dispatch({
    type: SHOW_DM_MODAL
  })
}

export const hideDMModal = () => dispatch => {
  dispatch({
    type: HIDE_DM_MODAL
  });
}
