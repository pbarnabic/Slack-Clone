import {hideRecentSearchModal } from "../../../actions/modal_actions";
import { connect } from 'react-redux';
import React from 'react';
import RecentSearchesModal from "./recent_searches_modal";

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.entities.users[state.session.id],
    recentSearchesModalShow: ownProps.show
  }
  );
};

const mapDispatchToProps = dispatch => {
  return({
    changeToHide: () => dispatch(hideRecentSearchModal())
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(RecentSearchesModal);
