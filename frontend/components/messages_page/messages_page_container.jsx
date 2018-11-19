import {fetchChannel, fetchChannels, createChannel } from "../../actions/channel_actions";
import { connect } from 'react-redux';
import React from 'react';
import MessagePage from "./messages_page";
import {hideModal, showModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let channels = Object.values(state.entities.channels)
  return{

    showChannels: state.modals.show,
    currentUser: state.entities.users[state.session.id],
    channels: channels,
    channel: state.entities.channels[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchChannels: () => dispatch(fetchChannels()),
    changeToHide: () => dispatch(hideModal()),
    changeToShow: () => dispatch(showModal())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MessagePage);
