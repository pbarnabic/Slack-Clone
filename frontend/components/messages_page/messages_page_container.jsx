import {fetchChannel, fetchChannels, createChannel, fetchChannelUsers, fetchChannelInfo } from "../../actions/channel_actions";
import { connect } from 'react-redux';
import React from 'react';
import MessagePage from "./messages_page";
import {hideModal, showModal} from '../../actions/modal_actions';
import {fetchMessages, createMessage} from '../../actions/conversation_actions';
const mapStateToProps = (state, ownProps) => {
  let channels = Object.values(state.entities.channels)
  const users = Object.values(state.entities.users);
  return{

    showChannels: state.modals.show,
    currentUser: state.entities.users[state.session.id],
    channels: channels || {name: "", id: -1},
    channel: state.entities.channels[ownProps.match.params.id] || {conversation: {id:-1}},
    users: users || [{id: null, username: null}]
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchChannels: () => dispatch(fetchChannels()),
    changeToHide: () => dispatch(hideModal()),
    changeToShow: () => dispatch(showModal()),
    createMessage: (message) => dispatch(createMessage(message)),
    fetchChannelInfo: (id) => dispatch(fetchChannelInfo(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MessagePage);
