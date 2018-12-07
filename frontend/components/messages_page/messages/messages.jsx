import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {ActionCable} from 'react-actioncable-provider';
class Messages extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.messages = this.props.messages;
    const el = document.getElementById("bottom-of-messages-list");
    el.scrollIntoView();
  }

  componentDidUpdate(prevProps){
    if(prevProps.messages != this.props.messages){
      const el = document.getElementById("bottom-of-messages-list");
      el.scrollIntoView();
    }
  }

  render(){

    let messages = this.props.messages.map(message => {
      return(
        <li key={message.id}>
          <div className="Received-Message-Box">
            <div className="Received-Message-Box-left">
              <img id="profile-pic-img" src={window.slack_profile_pic} />
            </div>
            <div className="Received-Message-Box-right">
              <div className="Received-Message-Box-right-top">
                <div className = "Recieved-Message-Box-right-top-name">
                  {this.props.users[message.user_id].username}
                </div>
                <div className = "Recieved-Message-Box-right-top-time">
                  {strToDate(message.created_at.slice(11,16))}
                </div>
              </div>
              <div className="Received-Message-Box-right-bottom">
                {message.body}
              </div>
            </div>
          </div>
        </li>
      );


    });

    return(
      <div>
        <ActionCable
          key={this.props.channel.id}
          channel = {{channel: 'MessagesChannel',conversation: this.props.channel.id}}
          onReceived ={res => {this.props.receiveMessage(res)}}
        />
        <div className="orderedMessagesList">
          <ul>
            {messages}
          </ul>
          <div id="bottom-of-messages-list">
          </div>
        </div>

      </div>
    );
  }

}


function strToDate(str){

  let min = str.slice(4);
  let hrs = str.slice(0,3);
  let answerHrs;
  let tod;
  if(parseInt(hrs) > 12){
    answerHrs = parseInt(hrs) % 12;
    tod = 'PM';
  }else{
    answerHrs = parseInt(hrs);
    tod = 'AM';
  };

  if(parseInt(min) % 10 == 0 && min != "00"){
    min = min + "0";
  };

  if (parseInt(min) < 10 && min != "00"){
    min = "0" + min;
  }

  return answerHrs.toString() + ":" + min + " " + tod;
}

export default Messages;
