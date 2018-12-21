import React from 'react';
import { withRouter} from 'react-router-dom';

class Siri extends React.Component{

  constructor(props){
    super(props);
    this.speech = new SpeechSynthesisUtterance();
    this.handleClick = this.handleClick.bind(this);
    this.state = {listening: false, prompt: "Some things you can say: 'Create Channel', 'Create Message','Switch to a different Channel' 'Switch to a DM'", response: ""}
    this.head = this.greeting;
    this.greeting = this.greeting.bind(this);
    this.phase = "greeting";

    this.listening = false;
    this.level1Decision = this.level1Decision.bind(this);
    this.level2Decision = this.level2Decision.bind(this);
    this.switchDM = this.switchDM.bind(this);
    this.createActualChannel = this.createActualChannel.bind(this);
    this.switchToDM = this.switchToDM.bind(this);
    this.switchToChannel = this.switchToChannel.bind(this);
    this.createActualMessage = this.createActualMessage.bind(this);
    this.isThisOkay = this.isThisOkay.bind(this);
    this.handleOkay = this.handleOkay.bind(this);
    this.wut = this.wut.bind(this);

    this.findDMByUsername = this.findDMByUsername.bind(this);
    this.findChannelByName = this.findChannelByName.bind(this);

    this.retreiveInfo = this.retreiveInfo.bind(this);
    this.restoreDefault = this.restoreDefault.bind(this);
    this.body = "";


  }

  componentDidUpdate(prevProps,prevState){
    if(prevProps.show != this.props.show){
      this.phase = "greeting";
      this.body = "";
      this.listening = false;
      this.setState({listening: false, prompt: "Some things you can say: 'Create Channel', 'Create Message','Switch to a different Channel' 'Switch to a DM'", response: ""});
      this.props.resetTranscript();
    }
  }

  handleClick(e){
    e.stopPropagation();
    if(! this.listening){
      switch (this.phase) {
        case "greeting":
          this.greeting();
          break;
        default:
          this.greeting();
      }

    }else{
      switch (this.phase) {
        case "greeting": //level 0
          this.level1Decision();
          break;
        case "create": //level 1
          this.level2Decision();
          break;
        case "switch":
          this.level2Decision();
          break;
        case "createChannel": //level 2
          this.level2Decision();
          break;
        case "switchChannel":
          this.level2Decision();
          break;
        case "createMessage":
          this.level2Decision();
          break;
        case "switchDM":
          this.level2Decision();
          break;
        case "getNewName": //level 3
          this.createActualChannel();
          break;
        case "getMessageBody":
          this.createActualMessage();
          break;
        case "getChannelName":
          this.switchToChannel();
          break;
        case "getUsername":
          this.switchToDM();
          break;
        case "okay_to_send":
          this.handleOkay();
          break;
        default:
          this.props.abortListening();
          this.props.chaneToHide();
      }

    }

  }

  greeting(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Hey, sports fan. Welcome to Slack Siri. What can I do for you?"
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening,5000);
    this.listening = true;
    this.setState({prompt:"Hey, sports fan. Welcome to Slack Siri. What can I do for you?",listening:true});
  }

  level1Decision(){
    this.props.abortListening();
    let response = this.props.transcript;
    this.setState({response: response,listening:false});
    this.props.resetTranscript();
    this.props.stopListening();
    switch (this.level1Return(response)) {
      case "CreateChannel":
        this.createChannel();
        this.phase = "getNewName"
        break;
      case "CreateMessage":
        this.createMessage();
        this.phase = "getMessageBody"
        break;
      case "SwitchChannel":
        this.switchChannel();
        this.phase = "getChannelName"
        break;
      case "SwitchDM":
        this.switchDM();
        this.phase = "getUsername"
        break;
      case "create":
        this.create();
        break;
      case "switch":
        this.switch();
        break;
      default:
        this.wut();
        this.greeting();
    }
  }


  level1Return(response){
    if(response.includes("create") && response.includes("channel")){
      return "CreateChannel";
      this.phase = "CreateChannel";
    }else if(response.includes("create") && response.includes("message")){
      this.phase = "CreateMessage";
      return "CreateMessage";
    }else if(response.includes("switch") && response.includes("channel")){
      this.phase = "SwitchChannel";
      return "SwitchChannel";
    }else if(response.includes("switch") && response.includes("DM")){
      this.phase = "SwitchDM";
      return "SwitchDM";
    }else if (response.includes("switch")){
      this.phase = "switch";
      return "switch";
    }else if (response.includes("create")){
      this.phase = "create";
      return "create";
    }
    return "unknown";
  }

  level2Decision(){
    this.props.abortListening();
    let response = this.props.transcript;
    this.setState({response: response,listening:false});
    this.props.resetTranscript();
    this.props.stopListening();
    switch (this.level2Return(response)) {
      case "CreateChannel":
        this.createChannel();
        this.phase = "getNewName"
        break;
      case "CreateMessage":
        this.createMessage();
        this.phase = "getMessageBody"
        break;
      case "SwitchChannel":
        this.switchChannel();
        this.phase = "getChannelName"
        break;
      case "SwitchDM":
        this.switchDM();
        this.phase = "getUsername"
        break;
      default:
        this.phase == "create" ? this.create() : this.switch();

    }
  }


  level2Return(response){
    if(this.phase == "create" && response.includes("channel")){
      return "CreateChannel";
      this.phase = "CreateChannel";
    }else if(this.phase == "create" && response.includes("message")){
      this.phase = "CreateMessage";
      return "CreateMessage";
    }else if(this.phase == "switch" && response.includes("channel")){
      this.phase = "SwitchChannel";
      return "SwitchChannel";
    }else if(this.phase == "switch" && response.includes("DM")){
      this.phase = "SwitchDM";
      return "SwitchDM";
    }
    return "unknown";
  }


  create(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "What do you want to Create?"
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening,1000);
    this.listening = true;
    this.setState({prompt:"What do you want to Create?", response: "",listening:true});
  }
  switch(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Do you want to switch to a channel or DM"
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening,2000);
    this.listening = true;
    this.setState({prompt:"Do you want to switch to a channel or DM?", response: "",listening:true});
  }
  createChannel(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "What do you want to call this new channel?"
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening,2000);
    this.listening = true;
    this.setState({prompt:"What do you want to call this new channel?", response: "",listening:true});
  }
  createMessage(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "What do you want this new message to say?"
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening,2000);
    this.listening = true;
    this.setState({prompt:"What do you want this new message to say?", response: "",listening:true});
  }
  switchChannel(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "What is the name of the channel you wish to switch to?"
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening,2000);
    this.listening = true;
    this.setState({prompt:"What is the name of the channel you wish to switch to?", response: "",listening:true});
  }
  switchDM(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "State the name of the DM you wish to switch to?"
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening,4000);
    this.listening = true;
    this.setState({prompt:"State the name of the DM do you wish to switch to?", response: "",listening:true});
  }

  retreiveInfo(){
    this.props.abortListening();
    let response = this.props.transcript;
    this.setState({response: response,listening:false});
    this.props.resetTranscript();
    this.props.stopListening();
    return response;
  }

  createActualChannel(){
    let name = this.retreiveInfo();
    this.props.createChannel({channel_name: name}).then(response => this.props.history.push(`/messages/${response.channel.id}`)).then(() => this.props.changeToHide());
    this.restoreDefault();
  }

  switchToDM(){
    let username = this.retreiveInfo();
    let id = this.findDMByUsername(username);
    this.setState({response: username});
    if(id != undefined){
      this.props.history.push(`/messages/${id}`);
      this.restoreDefault();
    }else{
      this.wut();
      this.phase = "getUsername"
      this.switchDM();
    }

  }
  switchToChannel(){
    let name = this.retreiveInfo();
    let id = this.findChannelByName(name);
    this.setState({response: name});
    if(id != undefined){
      this.props.history.push(`/messages/${id}`);
      this.restoreDefault();
    }else{
      this.wut();
      setTimeout(this.switchChannel(),2000);
      this.phase = "getChannelName"
    }
  }


  createActualMessage(){
    let body = this.retreiveInfo();
    this.phase = "okay_to_send";
    this.isThisOkay(body);
  }

  findDMByUsername(username){
    let dms = this.props.directMessages
    for(let i = 0; i < dms.length; i++){
      let dm = dms[i];
      if(dm.channel_name.includes(username)){
        return dm.id;
      }
    }
  }
  findChannelByName(name){
    let channels = this.props.channels
    for(let i = 0; i < channels.length; i++){
      let channel = channels[i];
      if(channel.channel_name.includes(name)){
        return channel.id;
      }
    }
  }

  isThisOkay(body){
    let prompt = "Is the following okay?: " + body;
    let speech = new SpeechSynthesisUtterance();
    speech.text = prompt;
    speechSynthesis.speak(speech);
    setTimeout(this.props.startListening, 7000);
    this.listening = true;
    this.setState({prompt: prompt, response: ""});
    this.body = body;
  }

  handleOkay(){
    if(this.retreiveInfo().includes("yes")){
      this.props.createMessage({body: this.body, channel_id: this.props.match.params.id, is_url: false});
      this.restoreDefault();
    }else{
      this.createMessage();
      this.phase = "getMessageBody";
    }
  }


  restoreDefault(){
    this.setState({listening: false, prompt: "Some things you can say: 'Create Channel', 'Create Message','Switch to a different Channel' 'Switch to a DM'", response: ""});
    this.props.changeToHide();
    this.phase = "greeting";
    this.body = "";
    this.listening = false;
  }

  wut(){
    let speech = new SpeechSynthesisUtterance();
    speech.text = "I do not understand";
    speechSynthesis.speak(speech);
  }


  render(){

    let button;
    this.state.listening || this.phase == "okay_to_send" ? button = "Done" : button = "Start";

    return(
      <div className={this.props.show}>
        <div className="Siri-title-bar">
          <span>Slack Siri</span>
        </div>
        <div className = "Siri-Prompt">
          {this.state.prompt}
        </div>
        <div className = "Siri-Response">
          {this.state.response}
        </div>
        <div className = "Siri-modal-button">
          <button onClick={this.handleClick}>{button}</button>
        </div>
      </div>
    )

  }

}

export default withRouter(Siri);
