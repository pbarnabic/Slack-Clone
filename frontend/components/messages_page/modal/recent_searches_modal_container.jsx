import React from 'react';
import RecentSearchesModal from "./recent_searches_modal";
import { connect } from 'react-redux';
import {hideRecentSearchModal } from "../../../actions/modal_actions";
import {addToSearch } from "../../../actions/search_actions";
import {search} from '../../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.entities.users[state.session.id],
    recentSearchesModalShow: ownProps.show,
    recentSearches: state.searches.recentSearches || [],
    searchResults: state.searches.searchResults || {}
  }
  );
};

const mapDispatchToProps = dispatch => {
  return({
    changeToHide: () => dispatch(hideRecentSearchModal()),
    addToSearch: (search) => dispatch(addToSearch(search)),
    search: (str) => dispatch(search(str))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(RecentSearchesModal);
