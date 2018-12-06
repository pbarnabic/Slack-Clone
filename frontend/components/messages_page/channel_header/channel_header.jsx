import React from 'react';
import { withRouter, Link } from 'react-router-dom';
export default class MessagePage extends React.Component{

  render(){
    
    let channelName = this.parseChannelName(this.props.channel);
    if(this.props.channel.is_direct_message == false){
      channelName = "#" + channelName;
    }

    return(
    <div>
      <div className="top-row-left-side-top-left">
        <span>{channelName} </span>
      </div>
      <div className="bottom-row-left-side-top-left">
        <span>👤 {this.props.channel.userIds.length}</span>
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

      if(originalChannelName.indexOf(currentUserUsername) == originalChannelName.length - currentUserUsername){
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

    return name;

  }




}
