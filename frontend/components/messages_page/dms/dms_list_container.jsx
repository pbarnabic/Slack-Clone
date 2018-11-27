import React from 'react';
import { connect } from 'react-redux';
import DMsList from "./dms_list";
import {showDMModal} from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let channels = Object.values(state.entities.directMessages);

  return{
    currentUser: state.entities.users[state.session.id] || {id: -1, username:""},
    channels: channels || [{id: "", channel_name: ""}],
    channel: state.entities.directMessages[ownProps.url] || {id: "", channel_name: ""},

  };
};

const mapDispatchToProps = dispatch => {
  return{
    changeToShow: () => dispatch(showDMModal())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DMsList);
