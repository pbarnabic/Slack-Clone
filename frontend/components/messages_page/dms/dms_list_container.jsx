import React from 'react';
import { connect } from 'react-redux';
import DMsList from "./dms_list";
import {showDMModal} from '../../../actions/modal_actions';
import {receiveDM} from '../../../actions/direct_message_actions';

const mapStateToProps = (state, ownProps) => {
  let channels = Object.values(state.entities.directMessages);

  return{
    currentUser: state.entities.users[state.session.id] || {id: -1, username:""},
    channels: channels || [{id: "", channel_name: "", userIds:""}],
    channel: state.entities.directMessages[ownProps.url] || {id: "", channel_name: "",userIds:""},
    users: state.entities.users || {id:"", username:""}
  };
};

const mapDispatchToProps = dispatch => {
  return{
    changeToShow: () => dispatch(showDMModal()),
    receiveDM: (dm) => dispatch(receiveDM(dm))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DMsList);
