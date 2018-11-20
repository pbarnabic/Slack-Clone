import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import ChannelsModalContainer from '../messages_page/modal/channels_modal_container'
import TopLeftCornerContainer from '../headers/top_left_corner/top_left_corner_container'
class MainPage extends React.Component{

  componentDidMount(){

    this.props.fetchDefault().then(channel => {
      let id = this.props.channels[0].id;
      this.props.history.push(`/messages/${id}`);
      }
    );
    this.props.fetchChannels();
    // this.props.hideModal();
  }


  render(){


    return(
    <div className="main-page-outermost-div">
      <div className="main-left">
        <div className="top" id="top-left"><TopLeftCornerContainer/></div>
        <div className="bottom">
          <div id="channel-section">
            <div id="channels-title-div">
              <span id="channels-title" onClick={() => this.props.showModal()}>Channels</span>
            </div>
            <ChannelsModalContainer show={this.props.showChannels}/>
          </div>
          <div id="direct-message-section">
            Direct Messages
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="top Welcome-To-Slack" id="top-right">Welcome To Slack, {this.props.currentUser.username}!</div>
        <div className="bottom" id="right-bottom">
          <div id="message-history" className="new-user-join-channel-button">
            <button id="join-a-channel" onClick={() => this.props.showModal() }>JOIN A CHANNEL! </button>
          </div>
          
        </div>
      </div>

    </div>
    );
  }

}

export default withRouter(MainPage);
