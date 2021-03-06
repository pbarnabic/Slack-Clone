import {createChannelMembership, createChannel } from "../../../actions/channel_actions";
import {hideModal } from "../../../actions/modal_actions";
import { connect } from 'react-redux';
import React from 'react';
import ChannelsModal from "./channels_modal";

const mapStateToProps = (state,ownProps) => {
  let channels = Object.values(state.entities.channels);
  return({
    currentUser: state.entities.users[state.session.id] || {id: "-1", username: ""},
    channel_id: ownProps.channel_id,
    channels: channels,
    show: ownProps.show
  }
  );

};
const mapDispatchToProps = dispatch => {
  return({
    changeToHide: () => dispatch(hideModal()),
    createChannelMembership: (channel) => dispatch(createChannelMembership(channel)),
    createChannel: (channel) => dispatch(createChannel(channel))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelsModal);
