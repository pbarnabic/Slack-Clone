import {connect} from 'react-redux';
import React from 'react';
import { fetchChannels, fetchChannelInfo } from "../../actions/channel_actions";
import {hideModal, showModal, showDMModal, hideDMModal,showRecentSearchModal,hideRecentSearchModal,showSearchResultsModal, hideSearchResultsModal, showSiriModal, hideSiriModal} from '../../actions/modal_actions';
import {createMessage} from '../../actions/conversation_actions';
import { fetchDMs, fetchDMCandidates } from "../../actions/direct_message_actions";
import MessagePage from "./messages_page";

const mapStateToProps = (state, ownProps) => {
  let channels = Object.values(state.entities.channels);
  const users = Object.values(state.entities.users);
  return{

    showChannelsModal: state.modals.show,
    showDMModal: state.modals.showDM,
    showRecentSearchModal: state.modals.recentSearchModal,
    showSearchResultsModal: state.modals.searchResultsModal,
    channels: channels || {name: "", id: -1},
    channel: state.entities.channels[ownProps.match.params.id] || {conversation: {id:-1}},
    users: users || [{id: null, username: null}]
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchChannels: () => dispatch(fetchChannels()),
    fetchDMs: () => dispatch(fetchDMs()),
    fetchDMCandidates: () => dispatch(fetchDMCandidates()),
    changeToHide: () => dispatch(hideModal()),
    changeToShow: () => dispatch(showModal()),
    changeDMToShow: () => dispatch(showDMModal()),
    changeDMToHide: () => dispatch(hideDMModal()),
    createMessage: (message) => dispatch(createMessage(message)),
    fetchChannelInfo: (id) => dispatch(fetchChannelInfo(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MessagePage);
