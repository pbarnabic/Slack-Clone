import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class ChannelsModal extends React.Component{

  joinChannel(id){
    debugger
    this.props.createChannelMembership(id).then(()=>
    {
      this.props.changeToHide();}
    );
    this.props.history.push(`/messages/${id}`);

  }

  render(){
    const channelList = this.props.channels.map(channel => {
      if(channel.userIds.includes(this.props.currentUser.id) === false){
        return(
          <li key={channel.id} className="channels-modal-list-item" onClick={() => this.joinChannel(channel.id)}>
            {channel.channel_name}
          </li>

      );
    };
    });

    return(
      <section id="modal_id" className={this.props.show}>
        <div className="outermost-channels-modal-div">
          <div className="channels-modal-close-X">
            <span  onClick={() => this.props.changeToHide()}>✕</span>
          </div>
          <div className={`channels-modal-list-of-channels`}>
            <div className="header-modal-list-of-channels">
              <span>Browse Channels</span>
            </div>
            <ul>
              {channelList}
            </ul>
          </div>
      </div>
      </section>
    );


  }


}

export default withRouter(ChannelsModal);
