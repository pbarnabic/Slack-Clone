import * as ConversationAPIUtil from '../util/conversations_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages : messages
});

export const receiveMessage = response => {
  const {message} = response;
  return ({
  type: RECEIVE_MESSAGE,
  message: message
});
}


export const createMessage = (message) => dispatch => {

  return ConversationAPIUtil.createMessage(message).then(message => (
    dispatch(receiveMessage(message))
  )
)};

export const fetchMessages = (id) => dispatch => (
  ConversationAPIUtil.fetchMessages(id).then(messages => (
    dispatch(receiveMessages(messages))
  ))
);
