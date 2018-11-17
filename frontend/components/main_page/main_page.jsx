import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class MainPage extends React.Component{

  componentDidMount(){

    this.props.fetchDefault().then(channel => {
      let id = this.props.channels[0].id;
      this.props.history.push(`/messages/${id}`);
      }
    );

  }


  render(){


    return(
    <div className="main-page-outermost-div">
      <div className="main-left">
        <div className="top" id="top-left">left-top</div>
        <div className="bottom">
          <div id="channel-section">
            <ul>

            </ul>
          </div>
          <div id="direct-message-section">
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="top" id="top-right">right-top</div>
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

export default withRouter(MainPage);
