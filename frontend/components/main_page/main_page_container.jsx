import {fetchChannel, fetchChannels, createChannel, fetchDefault } from "../../actions/channel_actions";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from "./main_page";
import {hideModal, showModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
  let channels = Object.values(state.entities.channels)
  return{
    showChannels: state.modals.show,
    currentUser: state.entities.users[state.session.id] || {username:"", id:"-1"},
    channels: channels
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchDefault: () => dispatch(fetchDefault()),
    showModal: () => dispatch(showModal()),
    fetchChannels: () => dispatch(fetchChannels()),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
