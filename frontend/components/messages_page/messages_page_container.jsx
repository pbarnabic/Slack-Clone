import {fetchChannel, fetchChannels, createChannel } from "../../actions/channel_actions";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import MessagePage from "./messages_page";


const mapStateToProps = (state, ownProps) => {
  let channels = Object.values(state.entities.channels)
  return{
    // currentUser: users[session.id]
    currentUser: state.entities.users[state.session.id],
    channels: channels,
    channel: state.entities.channels[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    createChannel: (channel) => dispatch(createChannel())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MessagePage);
