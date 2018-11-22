import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TopLeftCornerContainer from '../headers/top_left_corner/top_left_corner_container';
import ChannelListContainer from './channels/channel_list_container';
import DMsListContainer from './dms/dms_list_container';
import ChannelsModalContainer from './modal/channels_modal_container';
import ChannelHeaderContainer from './channel_header/channel_header_container';
import MessagesContainer from './messages/messages_container';
import {ActionCable} from 'react-actioncable-provider';

class MessagePage extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {valueOfInput: ""};
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    this.props.fetchChannels();
    this.props.fetchDMs();
    this.props.fetchDMCandidates();
    this.props.changeToHide();
    this.props.fetchChannelInfo(this.props.match.params.id)
    this.channel_id = this.props.match.params.id;

  }

  componentDidUpdate(prevProps,prevState){
    if (prevProps.match.params.id != this.props.match.params.id){
      this.props.fetchChannelInfo(this.props.match.params.id);

    };
  }


  changeToShow(){
    this.props.changeToShow();
  }
  changeToHide(){
    this.props.changeToHide();
    this.props.fetchChannelInfo(this.props.match.params.id);
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({
      valueOfInput: e.target.value
    });
  }



  handleSubmit(e){
    e.preventDefault();
    this.props.createMessage({body: this.state.valueOfInput, channel_id: this.props.match.params.id});
    this.setState({valueOfInput: ""});
  }


  render(){
    const channel_id = this.props.match.params.id;
    return(

    <div className="main-page-outermost-div">
      <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={res => this.props.receiveConversation(res)}
        />
      <ChannelsModalContainer show={this.props.showChannels}/>
      <div className="main-left">

        <TopLeftCornerContainer />

        <div className="bottom">
          <div id="channel-section">
            <ChannelListContainer url={channel_id} />
          </div>
          <div id="channel-section">
            <DMsListContainer url={channel_id} />
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="top" id="top-right">

            <div id="left-side-top-left">
              <ChannelHeaderContainer channel_id={channel_id}/>
            </div>
            <div id="left-side-top-middle">

            </div>
            <div id="left-side-top-right">
            </div>
        </div>
        <div className="bottom" id="right-bottom">
          <div id="message-history">
            <MessagesContainer channel_id={channel_id}/>


          </div>
          <div id="chat-div">
            <div className="chat-sub" id="plus-sign">+</div>
            <div>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <input placeholder="Message" id="chat-input" onChange={e => this.handleChange(e)} type="text" value={this.state.valueOfInput}/>
              </form>
          </div>
            <div className="chat-sub">@</div>
            <div className="chat-sub">☺</div>
          </div>
        </div>
      </div>

    </div>
    );
  }

}

export default withRouter(MessagePage);
