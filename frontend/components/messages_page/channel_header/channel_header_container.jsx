import { connect } from 'react-redux';
import React from 'react';
import ChannelHeader from "./channel_header";
import {showSiriModal, hideSiriModal} from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let users = Object.values(state.entities.users);
  return{
    channel: state.entities.channels[ownProps.channel_id] || state.entities.directMessages[ownProps.channel_id] || {channel_name: "", userIds:{length: 0}, is_direct_message: false},
    channel_id: ownProps.channel_id,
    currentUser: state.entities.users[state.session.id] || {id: "", username:""},
    users: users || [{username: "",id:""}],
    showSiriModal: state.modals.siriModal || "hidden-siri-modal",
    startListening: ownProps.startListening,
    transcript: ownProps.transcript,
    resetTranscript: ownProps.resetTranscript,
    stopListening: ownProps.stopListening,
    abortListening: ownProps.abortListening
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    displaySiriModal: () => dispatch(showSiriModal()),
    hideSiriModal: () => dispatch(hideSiriModal())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ChannelHeader);
