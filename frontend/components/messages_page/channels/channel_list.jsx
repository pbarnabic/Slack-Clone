import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ChannelList extends React.Component{

  changeToShow(e){
    e.stopPropagation();
    this.props.changeToShow();
  }

  render(){

    const channelList = this.props.channels.map((channel,idx) => {
        var channel_name = channel.channel_name;
        if (channel.channel_name.length > 18){
          channel_name = channel_name.slice(0,18) + "...";
        }
        if(channel.userIds.includes(this.props.currentUser.id) && channel.id != this.props.channel.id){
          return(
            <Link key={channel.id} to={`/messages/${channel.id}`} >
              <li className="listed-channels non-selected-channels" >
                <span className="hash">#</span>{channel_name}
              </li>
            </Link>
          );
        }else if(channel.userIds.includes(this.props.currentUser.id)){
            return(
               <li key={channel.id} className="listed-channels selected-channels">
                 <span className="selected-hash">#</span>{channel_name}
               </li>
            );
          };


    });


    return(
      <ul>
        <div id="channels-title-div">
          <span id="channels-title" onClick={(e) => this.changeToShow(e)}>Channels</span>
        </div>
        <div className="channels-list-div">
          {channelList}
        </div>
      </ul>
    );


  }

}

export default withRouter(ChannelList);
