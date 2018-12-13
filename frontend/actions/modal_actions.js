export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const SHOW_DM_MODAL = "SHOW_DM_MODAL";
export const HIDE_DM_MODAL = "HIDE_DM_MODAL";
export const SHOW_RECENT_SEARCH_MODAL = "SHOW_RECENT_SEARCH_MODAL";
export const HIDE_RECENT_SEARCH_MODAL = "HIDE_RECENT_SEARCH_MODAL";
export const SHOW_SEARCH_RESULTS_MODAL = "SHOW_SEARCH_RESULTS_MODAL";
export const HIDE_SEARCH_RESULTS_MODAL = "HIDE_SEARCH_RESULTS_MODAL";
export const HIDE_SIRI_MODAL = "HIDE_SIRI_MODAL";
export const SHOW_SIRI_MODAL = "SHOW_SIRI_MODAL";

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

export const showRecentSearchModal = () => dispatch => {
  dispatch({
    type: SHOW_RECENT_SEARCH_MODAL
  })
}

export const hideRecentSearchModal = () => dispatch => {
  dispatch({
    type: HIDE_RECENT_SEARCH_MODAL
  });
}

export const showSearchResultsModal = () => dispatch => {
  dispatch({
    type: SHOW_SEARCH_RESULTS_MODAL
  })
}

export const hideSearchResultsModal = () => dispatch => {
  dispatch({
    type: HIDE_SEARCH_RESULTS_MODAL
  })
}

export const showSiriModal = () => dispatch => {
  dispatch({
    type: SHOW_SIRI_MODAL
  })
}

export const hideSiriModal = () => dispatch => {
  dispatch({
    type: HIDE_SIRI_MODAL
  })
}
