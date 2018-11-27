import React from 'react';
import { connect } from 'react-redux';
import Messages from "./messages";
import { receiveMessage, createMessage} from '../../../actions/conversation_actions';

const mapStateToProps = (state,ownProps) => {
  const messages = Object.values(state.entities.messages);
  return{
    channel: state.entities.channels[ownProps.channel_id] || state.entities.directMessages[ownProps.channel_id] || {id: -1},
    messages: messages || [],
    users: state.entities.users || [{username:""}]
  };

};

const mapDispatchToProps = dispatch => {

  return{
    receiveMessage: message => dispatch(receiveMessage(message)),
    createMessage: message => dispatch(createMessage(message))
  };

};

export default connect(mapStateToProps,mapDispatchToProps)(Messages);
