import React from 'react';
import { connect } from 'react-redux';
import SearchResultsModal from "./search_results_modal";
import {hideSearchResultsModal } from "../../../actions/modal_actions";
import {addToSearch } from "../../../actions/search_actions";
import {search} from '../../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  let searchResultMessages = Object.values(state.searches.searchResults.message);
  return({
    searchResultsModalShow: ownProps.show,
    recentSearches: state.searches.recentSearches || [],
    searchResults: searchResultMessages || [{channel_id: "-1",body: "", user_id: -1}],
    authors: state.searches.searchResults.authors || {},
    query: state.searches.recentSearches[state.searches.recentSearches.length -1] || "",
    channels: state.entities.channels || {"-1": {"channel_name": ""}}

  });
};

const mapDispatchToProps = dispatch => {
  return({
    changeToHide: () => dispatch(hideSearchResultsModal()),
    addToSearch: (search) => dispatch(addToSearch(search)),
    search: (str) => dispatch(search(str))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchResultsModal);
