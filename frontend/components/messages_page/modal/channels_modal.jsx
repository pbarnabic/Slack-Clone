import React from 'react';
import { withRouter, Link } from 'react-router-dom';


export default class ChannelsModal extends React.Component{

  componentDidMount(){
    this.props.fetchForeignChannels();

  }


  render(){
    const channelList = this.props.channels.map(channel => {

      return(<Link to={`/messages/${channel.id}`}>
        <li key={channel.id} className="channels-modal-list-item" onClick={() => this.props.changeToHide()}>
          {channel.channel_name}
        </li>

      </Link>);
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
