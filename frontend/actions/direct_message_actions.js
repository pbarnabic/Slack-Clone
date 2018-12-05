import * as DirectMessageAPIUtil from '../util/direct_message_api_util';

export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";
export const RECEIVE_DIRECT_MESSAGES = "RECEIVE_DIRECT_MESSAGES";
export const RECEIVE_DM_CANDIDATES = 'RECEIVE_DM_CANDIDATES';

export const receiveDMCandidates = (users) => ({
    type: RECEIVE_DM_CANDIDATES,
    users: users
});

export const receiveDMs = (dms) => ({
    type: RECEIVE_DIRECT_MESSAGES,
    dms: dms
});

export const receiveDM = (dms) => {
  return ({
    type: RECEIVE_DIRECT_MESSAGE,
    dms: JSON.parse(dms)
});
};







export const fetchDMCandidates = () => dispatch => (
  DirectMessageAPIUtil.fetchDMCandidates().then(dmCandidates => (
    dispatch(receiveDMCandidates(dmCandidates))
  ))
);

export const createDirectMessage = (dm) => dispatch => {
  return DirectMessageAPIUtil.createDirectMessage(dm).then(dm => {
    return dispatch(receiveDM(dm));
  })
};

export const fetchDMs = () => dispatch => (
  DirectMessageAPIUtil.fetchDMs().then(dms => (
    dispatch(receiveDMs(dms))
  ))
);
