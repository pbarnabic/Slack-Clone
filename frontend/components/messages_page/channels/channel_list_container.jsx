import React from 'react';
import { connect } from 'react-redux';
import ChannelList from "./channel_list";
import { fetchChannels } from "../../../actions/channel_actions";
import {hideModal, showModal} from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let channels = Object.values(state.entities.channels);
  return{
    channels: channels || [{id: "", channel_name: ""}],
    channel: state.entities.channels[ownProps.url] || {id: "", channel_name: ""}
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchChannels: () => dispatch(fetchChannels()),
    changeToShow: () => dispatch(showModal())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);
