import { connect } from 'react-redux';
import React from 'react';
import TopLeftCorner from "./top_left_corner";
import {logout} from '../../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return{
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopLeftCorner);
