import * as DirectMessageAPIUtil from '../util/direct_message_api_util';

export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";
export const RECEIVE_DIRECT_MESSAGES = "RECEIVE_DIRECT_MESSAGES";
export const RECEIVE_DM_CANDIDATES = 'RECEIVE_DM_CANDIDATES';

export const recieveDMCandidates = (users) => ({
    type: RECEIVE_DM_CANDIDATES,
    users: users
});

export const receiveDMs = (dms) => ({
    type: RECEIVE_DIRECT_MESSAGES,
    dms: dms
});

export const receiveDM = (dm) => ({
    type: RECEIVE_DIRECT_MESSAGE,
    dms: dm
});







export const fetchDMCandidates = () => dispatch => (
  DirectMessageAPIUtil.fetchDMCandidates().then(dmCandidates => (
    dispatch(receiveDMCandidate(dmCandidates))
  ))
);

export const createDirectMessage = (dm) => dispatch => (
  DirectMessageAPIUtil.createDirectMessage(dm).then(dm => (
    dispatch(receiveDM(dm))
  ))
);

export const fetchDMs = () => dispatch => (
  DirectMessageAPIUtil.fetchDMs().then(dms => (
    dispatch(receiveDMs(dms))
  ))
);
