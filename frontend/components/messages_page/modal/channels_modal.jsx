import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class ChannelsModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {inputValue: ""}
    this.handleInput = this.handleInput.bind(this);
    this.handleSubnmit = this.handleSubmit.bind(this);
  }


  joinChannel(id){
    debugger
    this.props.createChannelMembership(id).then(()=>
    {
      this.props.changeToHide();}
    );
    this.props.history.push(`/messages/${id}`);

  }

  handleInput(e){
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(){
    let channel_name = this.state.inputValue;
    this.props.createChannel({channel_name: channel_name}).then(response => this.props.history.push(`/messages/${response.channel.id}`)).then(() => this.props.changeToHide());
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


            <form onSubmit={() => this.handleSubmit()}>
              <input id="new-channel-title-input" placeholder="Create a New Channel" value={this.state.inputValue} onChange={(e) => this.handleInput(e)}/>
            </form>
          </div>
      </div>
      </section>
    );


  }


}

export default withRouter(ChannelsModal);
