import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {ActionCable} from 'react-actioncable-provider';

class DMsList extends React.Component{

  changeToShow(e){
    e.stopPropagation();
    this.props.changeToShow();
  }

  handleNewDm(dm){
    this.props.receiveDM(dm);
    let newDMCreatorId = dm.slice(dm.indexOf(`admin_id":`)+10,dm.indexOf(`,"channel_name":`));
    let newDMId = dm.slice(dm.indexOf(`id":`)+4,dm.indexOf(`,"admin_id":`))
    if (newDMCreatorId = this.props.currentUser.id){
      this.props.history.push(`/messages/${newDMId}`);
    }
  }

  render(){

    const channelList = this.props.channels.map((channel,idx) => {
      let channel_name = this.parseDMName(channel);

      if (channel.channel_name.length > 18){
        channel_name = channel_name.slice(0,18) + "...";
      }

        if(channel.userIds.includes(this.props.currentUser.id) && channel.id != this.props.channel.id){

          return(
            <Link key={channel.id} to={`/messages/${channel.id}`} >
              <li className="listed-channels non-selected-channels" >
                <span className="hash">○ </span>{channel_name}
              </li>
            </Link>
          );
        }else if(channel.userIds.includes(this.props.currentUser.id)){

            return(
               <li key={channel.id} className="listed-channels selected-channels">
                 <span className="selected-hash">○ </span>{channel_name}
               </li>
            );
          };
    });

    return(
      <ul>

        <ActionCable
          key={this.props.channel.id}
          channel = {{channel: 'ChatsChannel', user_id: this.props.currentUser.id}}
          onReceived ={res => {this.handleNewDm(res)}}
        />

        <div id="channels-title-div">
          <span id="channels-title" onClick={(e) => this.changeToShow(e)}>Direct Messages</span>
        </div>
        <div className="dms-list-div">
          {channelList}
        </div>
      </ul>
    );


  }


  parseDMName(channel){

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
    name.slice(name.length -2) == ", " ? name = name.slice(0,name.length-2) : name;
    name.slice(0,1) == "," ? name = name.slice(1) : name;
    return name;

  }

}

export default withRouter(DMsList);
