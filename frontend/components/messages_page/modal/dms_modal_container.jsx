import { createDirectMessage } from "../../../actions/direct_message_actions";
import {hideDMModal } from "../../../actions/modal_actions";
import { connect } from 'react-redux';
import React from 'react';
import DMsModal from "./dms_modal";

const mapStateToProps = (state,ownProps) => {
  let dmUsers = Object.values(state.entities.dmUsers);
  return({
    currentUser: state.entities.users[state.session.id],
    dmCandidates: dmUsers,
    dmsModalShow: ownProps.show
  }
  );

};
const mapDispatchToProps = dispatch => {
  return({
    changeToHide: () => dispatch(hideDMModal()),
    createDirectMessage: (channel) => dispatch(createDirectMessage(channel))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(DMsModal);
