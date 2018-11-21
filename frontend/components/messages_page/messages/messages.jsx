import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {ActionCable} from 'react-actioncable-provider';
class Messages extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){

    this.props.createMessage({body: e.target.value, channel_id: this.props.channel.id});
  }

  componentDidMount(){
    this.messages = this.props.messages
  }

  render(){

    let messages = this.props.messages.map(message => {
      return <li key={message.id}>{this.props.users[message.user_id].username} {message.body}</li>;
    });

    return(
      <div>
        <ActionCable
          key={this.props.channel.id}
          channel = {{channel: 'MessagesChannel',conversation: this.props.channel.id}}
          onReceived ={res => this.props.receiveMessage(res)}
        />
        <div className="orderedMessagesList">
          <ul>
            {messages}
          </ul>
        </div>
      </div>
    );
  }

}

export default Messages;
