import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TopLeftCornerContainer from '../headers/top_left_corner/top_left_corner_container';
import ChannelListContainer from './channels/channel_list_container';
import DMsListContainer from './dms/dms_list_container';
import ChannelsModalContainer from './modal/channels_modal_container';
import DMsModalContainer from './modal/dms_modal_container';
import RecentSearchesModalContainer from './modal/recent_searches_modal_container';
import SearchResultsModalContainer from './modal/search_results_modal_container';
import ChannelHeaderContainer from './channel_header/channel_header_container';
import MessagesContainer from './messages/messages_container';
import SearchBarContainer from './channel_header/search_bar_container';
import {ActionCable} from 'react-actioncable-provider';
import SpeechRecognition from 'react-speech-recognition';

class MessagePage extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {valueOfInput: "", showURLBar: "invisible-url-bar", valueOfURL:"",listening: false, redDot: "hide-red-dot", microphone: "show-microphone"};
    this.handleChange = this.handleChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.changeToShow = this.changeToShow.bind(this);
    this.revealURLBar = this.revealURLBar.bind(this);
    this.handleDictation = this.handleDictation.bind(this);
  }

  componentDidMount(){
    this.props.fetchChannels();
    this.props.fetchDMs();
    this.props.fetchDMCandidates();
    this.props.changeToHide();
    this.props.changeDMToHide();
    this.props.fetchChannelInfo(this.props.match.params.id)
    this.channel_id = this.props.match.params.id;
  }

  componentDidUpdate(prevProps,prevState){
    if (prevProps.match.params.id != this.props.match.params.id){
      this.props.fetchChannelInfo(this.props.match.params.id);
      this.props.fetchDMCandidates();
      this.channel_id = this.props.match.params.id;
    };
  }

  changeToShow(){
    this.props.changeToShow();
  }
  changeToHide(){
    this.props.changeToHide();
    this.props.fetchChannelInfo(this.props.match.params.id);
  }

  handleDictation(){
    if(this.state.listening == false){
      this.props.startListening();
      this.setState({listening: true, redDot: "show-red-dot", microphone: "hide-microphone"});
    }else{
      this.props.stopListening();
      let transcript = this.props.finalTranscript;
      let currentInput = this.state.valueOfInput;
      let newInput = currentInput + " " + transcript;
      this.setState({
        valueOfInput: newInput,
        redDot: "hide-red-dot",
        microphone: "show-microphone",
        listening: false
      });
      this.props.resetTranscript();
    }


  }

  handleChange(e){
    this.setState({
      valueOfInput: e.target.value
    });
  }
  handleURLChange(e){
    this.setState({
      valueOfURL: e.target.value
    });
  }

  revealURLBar(){
    if(this.state.showURLBar == "invisible-url-bar")
      this.setState({
        showURLBar: "visible-url-bar"
      });
    else{
      this.setState({
        showURLBar: "invisible-url-bar"
      });
    }
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.createMessage({body: this.state.valueOfInput, channel_id: this.props.match.params.id, is_url: false});
    this.setState({valueOfInput: ""});
  }

  handleURLSubmit(e){
    e.preventDefault();
    this.props.createMessage({body: this.state.valueOfURL, channel_id: this.props.match.params.id, is_url: true});
    this.setState({valueOfURL: ""});
    this.revealURLBar();
  }


  render(){
    const channel_id = this.props.match.params.id;
    return(

    <div className="main-page-outermost-div">

      <ChannelsModalContainer show={this.props.showChannelsModal}/>
      <DMsModalContainer show={this.props.showDMModal}/>

      <div className="main-left">
        <TopLeftCornerContainer />
        <div className="bottom">
          <div id="channel-section">
            <ChannelListContainer url={channel_id} />
          </div>
          <div id="channel-section">
            <DMsListContainer url={channel_id} />
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="top" id="top-right">

            <div id="left-side-top-left">
              <RecentSearchesModalContainer show={this.props.showRecentSearchModal}/>
              <SearchResultsModalContainer show={this.props.showSearchResultsModal}/>
              <ChannelHeaderContainer channel_id={channel_id}/>
            </div>
            <div id="left-side-top-middle">

            </div>
            <div id="left-side-top-right">
              <SearchBarContainer/>
            </div>

        </div>
        <div className="bottom" id="right-bottom">
          <div id="message-history">

            <MessagesContainer channel_id={channel_id}/>
            <div className={this.state.showURLBar}>
              <span>Paste a URL and Hit Submit</span>
              <form onSubmit={(e) => this.handleURLSubmit(e)}>
                <input placeholder="URL" onChange={e => this.handleURLChange(e)} type="text" value={this.state.valueOfURL}/>
                <button>Add Link</button>
              </form>
            </div>
          </div>
          <div id="chat-div">
            <div className="chat-sub" id="plus-sign" onClick={this.revealURLBar}>
              +
            </div>
            <div>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <input placeholder="Message" id="chat-input" onChange={e => this.handleChange(e)} type="text" value={this.state.valueOfInput}/>
              </form>
          </div>
            <div className="chat-sub"><span className={this.state.microphone} onClick={this.handleDictation}>🎙</span> </div>
            <div className="chat-sub"><span className={this.state.redDot} onClick={this.handleDictation}>🔴</span> </div>
          </div>
        </div>
      </div>

    </div>
    );
  }

}
const options = {
  autoStart: false
}

export default SpeechRecognition(options)(withRouter(MessagePage));
