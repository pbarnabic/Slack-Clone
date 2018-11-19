import { connect } from 'react-redux';
import React from 'react';
import TopLeftCorner from "./top_left_corner";


const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.entities.users[state.session.id],
  };
};

export default connect(mapStateToProps,null)(TopLeftCorner);
