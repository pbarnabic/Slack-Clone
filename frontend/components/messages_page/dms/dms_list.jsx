import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {ActionCable} from 'react-actioncable-provider';

class DMsList extends React.Component{

  changeToShow(){
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

    var index = [0];
    var channel_name = "";

    const channelList = this.props.channels.map((channel,idx) => {

        if(channel.userIds.includes(this.props.currentUser.id) && channel.id != this.props.channel.id){

          return(
            <Link key={channel.id} to={`/messages/${channel.id}`} >
              <li className="listed-channels non-selected-channels" >
                <span className="hash">○ </span>{channel.channel_name}
              </li>
            </Link>
          );
        }else if(channel.userIds.includes(this.props.currentUser.id)){

            return(
               <li key={channel.id} className="listed-channels selected-channels">
                 <span className="selected-hash">○ </span>{channel.channel_name}
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
          <span id="channels-title" onClick={() => this.changeToShow()}>Direct Messages</span>
        </div>
        <div className="dms-list-div">
          {channelList}
        </div>
      </ul>
    );


  }

}

export default withRouter(DMsList);
