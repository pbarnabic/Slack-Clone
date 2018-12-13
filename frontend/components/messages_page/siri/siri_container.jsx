import {connect} from 'react-redux';
import React from 'react';
import Siri from './siri';
import {createMessage} from '../../../actions/conversation_actions';
import {createChannel } from "../../../actions/channel_actions";
import {hideSiriModal} from '../../../actions/modal_actions';

const mapStateToProps = (state,ownProps) => {
  let channels = Object.values(state.entities.channels);
  let directMessages = Object.values(state.entities.directMessages);
  return {
    startListening: ownProps.startListening,
    transcript: ownProps.transcript,
    resetTranscript: ownProps.resetTranscript,
    channels: channels,
    directMessages: directMessages,
    show: ownProps.show
  };
}

const mapDispatchToProps = dispatch => {
  return{
    createMessage: (message) => dispatch(createMessage(message)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    changeToHide: () => dispatch(hideSiriModal())
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Siri);
