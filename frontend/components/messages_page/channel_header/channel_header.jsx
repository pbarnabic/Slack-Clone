import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SiriContainer from '../siri/siri_container'
export default class MessagePage extends React.Component{

  constructor(props){
    super(props);
    this.state = {showUsers: "hidden-users-dropdown"};
    this.showUsersDropDown = this.showUsersDropDown.bind(this);
    this.showSiriModal = this.showSiriModal.bind(this);
  }

  showUsersDropDown(){
    this.state.showUsers == "hidden-users-dropdown" ? this.setState({showUsers: "visible-users-dropdown"}) : this.setState({showUsers: "hidden-users-dropdown"});
  }

  showSiriModal(e){
    e.stopPropagation();
    if (this.props.showSiriModal == "hidden-siri-modal"){
      this.props.displaySiriModal()
    }else{
      this.props.abortListening();
      this.props.hideSiriModal();
    }
  }

  render(){

    let channelName = this.parseChannelName(this.props.channel);
    if(this.props.channel.is_direct_message == false){
      channelName = "#" + channelName;
    }

    let usersList = this.props.users.map(user =>{
      return(
        <div key={user.id} className="dropdown-users-list-item">
            <img id="profile-pic-img" src={window.slack_profile_pic} />
            <li>{user.username}</li>
        </div>
      )
    })

    return(
    <div className="channel-header-class">
      <div className = "header-left-side">
        <div className="top-row-left-side-top-left">
          <span>{channelName} </span>
        </div>
        <div className="bottom-row-left-side-top-left">
          <span onClick={this.showUsersDropDown}>👤 {this.props.channel.userIds.length}</span>
          <span id="siri-button-header" onClick={e => this.showSiriModal(e)}>🗣</span>
          <SiriContainer show={this.props.showSiriModal} resetTranscript={this.props.resetTranscript} transcript={this.props.transcript} startListening={this.props.startListening} stopListening={this.props.stopListening} abortListening={this.props.abortListening}/>
          <div className={this.state.showUsers}>
            <ul>
              {usersList}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );

  }

  parseChannelName(channel){
    let currentUserUsername = this.props.currentUser.username;
    let originalChannelName = channel.channel_name;

    let startIndex;
    let endIndex;
    let name = "";

    if(originalChannelName == currentUserUsername){
      return originalChannelName;
    }

    if(originalChannelName.indexOf(currentUserUsername + ",") != -1 ){
      startIndex = originalChannelName.indexOf(currentUserUsername + ",");
      endIndex = startIndex + currentUserUsername.length + 1;
      name = originalChannelName.slice(0,startIndex) + originalChannelName.slice(endIndex);

    }else if(originalChannelName.indexOf(currentUserUsername) != -1){

      if(originalChannelName.indexOf(currentUserUsername) == originalChannelName.length - currentUserUsername.length){
        startIndex = 0;
        endIndex = originalChannelName.indexOf(currentUserUsername);
        name = originalChannelName.slice(0,endIndex);
      }else{
        return originalChannelName;
      }

    }else{
      return originalChannelName;
    }

    name.indexOf(",,") != -1 ? name = name.slice(0,startIndex) + name.slice(startIndex+1) : name;
    name.slice(name.length - 1) == "," ? name = name.slice(0,name.length - 1) : name;
    name.slice(0,1) == "," ? name = name.slice(1) : name;
    name.slice(name.length -2) == ", " ? name = name.slice(0,name.length-2) : name;

    return name;

  }




}
