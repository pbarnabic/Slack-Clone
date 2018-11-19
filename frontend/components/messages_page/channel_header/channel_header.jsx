import React from 'react';
import { withRouter, Link } from 'react-router-dom';
export default class MessagePage extends React.Component{

  componentDidMount(){
    // this.props.fetchChannels();
  }

  render(){


    return(
    <div>
      <div className="top-row-left-side-top-left">
        <span> #{this.props.channel.channel_name} </span>
      </div>
      <div className="bottom-row-left-side-top-left">
        <span>👤 {this.props.channel.userIds.length}</span>
      </div>
    </div>

  );

  }




}
