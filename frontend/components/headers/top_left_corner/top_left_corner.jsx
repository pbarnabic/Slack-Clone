import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class TopLeftCorner extends React.Component{


  render(){
    return(
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
    );
  }




}

export default withRouter(TopLeftCorner);
