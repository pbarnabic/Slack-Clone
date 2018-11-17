import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class MessagePage extends React.Component{

  componentDidMount(){
    this.props.fetchChannels();
  }


  render(){
    var index = [0];
    var channel_name = "";

    const channelList = this.props.channels.map((channel,idx) => {
      if(channel.id != this.props.channel.id){
        channel_name = this.props.channel.channel_name;
      return(

        <Link to={`/messages/${idx}`} > <li className="listed-channels non-selected-channels" key={idx}> <span className="hash">#</span> {channel.channel_name}</li> </Link>
      );
    }else{
      index = [idx];
      return(
         <li key={channel.id} className="listed-channels selected-channels"> <span className="selected-hash">#</span>  {channel.channel_name}</li>
      );
    };
    });


    const otherChannels = [];
    var ptr = 0
    while(otherChannels.length < 5 || ptr == channelList.length){
      if(ptr == index[0] ){
        ptr = ptr +1;
      }else{
        otherChannels.push(channelList[ptr]);
        ptr = ptr + 1;
      }
    };
    ;

    return(
    <div className="main-page-outermost-div">
      <div className="main-left">
        <div className="top" id="top-left">
          <div className="top-left-top-row">
              <div className="messages-page-slack-logo">
                <span>slack</span>
              </div>
              <div className="notification-icon">
                <span>🔔</span>
              </div>
          </div>
          <div className="message-page-top-left-username">
            {this.props.currentUser.username}
          </div>
        </div>

        <div className="bottom">
          <div id="channel-section">
            <ul>
              <div id="channels-title-div"><span id="channels-title">Channels</span></div>
              {channelList[index]}
              {otherChannels}

            </ul>
          </div>
          <div id="direct-message-section">
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="top" id="top-right">

            <div id="left-side-top-left">
              <div id="top-row-left-side-top-left">#{channel_name}</div>
              <div id="bottom-row-left-side-top-left"></div>
            </div>
            <div id="left-side-top-middle">
              middle
            </div>
            <div id="left-side-top-right">
              right
            </div>
        </div>
        <div className="bottom" id="right-bottom">
          <div id="message-history">random</div>
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
