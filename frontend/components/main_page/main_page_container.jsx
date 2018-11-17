import {fetchChannel, fetchChannels, createChannel, fetchDefault } from "../../actions/channel_actions";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from "./main_page";


const mapStateToProps = state => {
  let channels = Object.values(state.entities.channels)
  return{
    currentUser: state.currentUser,
    channels: channels
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchDefault: () => dispatch(fetchDefault())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
