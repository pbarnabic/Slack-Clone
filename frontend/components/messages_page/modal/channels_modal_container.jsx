import { fetchForeignChannels } from "../../../actions/channel_actions";
import {hideModal } from "../../../actions/modal_actions";
import { connect } from 'react-redux';
import React from 'react';
import ChannelsModal from "./channels_modal";

const mapStateToProps = (state,ownProps) => {
  let channels = Object.values(state.entities.channels);
  return({
    channel_id: ownProps.channel_id,
    channels: channels,
    show: ownProps.show
  }
  );

};
const mapDispatchToProps = dispatch => {
  return({
    fetchForeignChannels: () => dispatch(fetchForeignChannels()),
    changeToHide: () => dispatch(hideModal())
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelsModal);
