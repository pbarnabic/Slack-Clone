import { connect } from 'react-redux';
import React from 'react';
import ChannelHeader from "./channel_header";


const mapStateToProps = (state, ownProps) => {

  return{
    channel: state.entities.channels[ownProps.channel_id] || state.entities.directMessages[ownProps.channel_id] || {channel_name: "", userIds:{length: 0}, is_direct_message: false},
    channel_id: ownProps.channel_id,
    currentUser: state.entities.users[state.session.id] || {id: "", username:""},
  };
};


export default connect(mapStateToProps,{})(ChannelHeader);
