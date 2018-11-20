import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TopLeftCornerContainer from '../headers/top_left_corner/top_left_corner_container';
import ChannelListContainer from './channels/channel_list_container';
import ChannelsModalContainer from './modal/channels_modal_container';
import ChannelHeaderContainer from './channel_header/channel_header_container';
class MessagePage extends React.Component{


  componentDidMount(){
    this.props.fetchChannels();
    this.props.changeToHide();
  }

  changeToShow(){
    this.props.changeToShow();
  }
  changeToHide(){
    this.props.changeToHide();
  }


  render(){
    const channel_id = this.props.match.params.id;
    return(
    <div className="main-page-outermost-div">
      <ChannelsModalContainer show={this.props.showChannels}/>
      <div className="main-left">

        <TopLeftCornerContainer />

        <div className="bottom">
          <div id="channel-section">
            <ChannelListContainer url={channel_id} />
          </div>
          <div id="direct-message-section">
            Direct Messages
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="top" id="top-right">

            <div id="left-side-top-left">
              <ChannelHeaderContainer channel_id={channel_id}/>
            </div>
            <div id="left-side-top-middle">

            </div>
            <div id="left-side-top-right">
            </div>
        </div>
        <div className="bottom" id="right-bottom">
          <div id="message-history"></div>
          <div id="chat-div">
            <div className="chat-sub" id="plus-sign">+</div>
            <div><input placeholder="Message" id="chat-input"/></div>
            <div className="chat-sub">@</div>
            <div className="chat-sub">☺</div>
          </div>
        </div>
      </div>

    </div>
    );
  }

}

export default withRouter(MessagePage);
