import { connect } from 'react-redux';
import React from 'react';
import SearchBar from "./search_bar";
import {showRecentSearchModal} from '../../../actions/modal_actions';

const mapStateToProps = state =>{
  return {};
}

const mapDispatchToProps = dispatch =>{
  return{
    changeToShow: () => dispatch(showRecentSearchModal()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
