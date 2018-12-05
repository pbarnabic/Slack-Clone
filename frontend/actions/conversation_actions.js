import * as ConversationAPIUtil from '../util/conversations_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages : messages
});

export const receiveMessage = response => {

  return ({
  type: RECEIVE_MESSAGE,
  message: JSON.parse(response).message,
  user: JSON.parse(response).user
});
}


export const createMessage = (message) => dispatch => {

  return ConversationAPIUtil.createMessage(message).then(message => {
    return dispatch(receiveMessage(message));
  }
)};
