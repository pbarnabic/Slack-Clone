import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class TopLeftCorner extends React.Component{

  constructor(props){
    super(props);
    this.state = {show: "invisible-logout-drop-down"};
    this.logOutUser = this.logOutUser.bind(this);
  }

  showDropDown(){
    if (this.state.show == "invisible-logout-drop-down"){
      this.setState({show: "visible-logout-drop-down"});
    }else{
      this.setState({show: "invisible-logout-drop-down"});
    };
  }

  logOutUser(){
    this.props.history.push('/');
    this.props.logout();

  }

  render(){
    return(
    <div className="top" id="top-left" onClick={() => this.showDropDown()}>
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
      <div className={this.state.show}>
        <span onClick={() => this.logOutUser()}>Logout {this.props.currentUser.username}</span>
      </div>
    </div>
    );
  }




}

export default withRouter(TopLeftCorner);
