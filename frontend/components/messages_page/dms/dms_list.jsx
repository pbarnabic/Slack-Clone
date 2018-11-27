import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class DMsList extends React.Component{

  changeToShow(){
    this.props.changeToShow();
  }

  render(){

    var index = [0];
    var channel_name = "";

    const channelList = this.props.channels.map((channel,idx) => {
        console.log("this.props.channel.id");
        console.log(this.props.channel.id);
        console.log("channel.id:");
        console.log(channel.id);
        if(channel.userIds.includes(this.props.currentUser.id) && channel.id != this.props.channel.id){
          console.log("channel.id:");
          console.log(channel.id);
          console.log("this.props.channel.id");
          console.log(this.props.channel.id);
          return(
            <Link key={channel.id} to={`/messages/${channel.id}`} >
              <li className="listed-channels non-selected-channels" >
                <span className="hash">○ </span>{channel.channel_name}
              </li>
            </Link>
          );
        }else if(channel.userIds.includes(this.props.currentUser.id)){
          console.log("DMSList ElseIf channel.id")
            return(
               <li key={channel.id} className="listed-channels selected-channels">
                 <span className="selected-hash">○ </span>{channel.channel_name}
               </li>
            );
          };
    });

    return(
      <ul>
        <div id="channels-title-div">
          <span id="channels-title" onClick={() => this.changeToShow()}>Direct Messages</span>
        </div>
        {channelList}
      </ul>
    );


  }

}

export default withRouter(DMsList);
