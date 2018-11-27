import {fetchChannels} from "../../../actions/channel_actions";
import { connect } from 'react-redux';
import React from 'react';
import ChannelHeader from "./channel_header";


const mapStateToProps = (state, ownProps) => {

  return{
    channel: state.entities.channels[ownProps.channel_id] || state.entities.directMessages[ownProps.channel_id] || {channel_name: "", userIds:{length: 0}},
    channel_id: ownProps.channel_id
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelHeader);
