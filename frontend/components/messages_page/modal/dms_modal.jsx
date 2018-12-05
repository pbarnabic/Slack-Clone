import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class DMsModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {inputValue: "", users: [], searchResults: this.props.dmCandidates, selected: []};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubnmit = this.handleSubmit.bind(this);
    this.aggregateDMUsers = this.aggregateDMUsers.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps.dmsModalShow != this.props.dmsModalShow){
      this.setState({inputValue: "", users: [], searchResults: this.props.dmCandidates, selected: []});
    }
  }

  aggregateDMUsers(user){
    return () => {

    let newArr = this.state.users;
    newArr.push(user.id);
    let sel = this.state.selected;
    sel.push(user);

    this.setState({inputValue: "", users: newArr, selected: sel});
  };
  }

  handleInput(e){
    e.preventDefault();
    this.setState({inputValue: e.target.value}, () => {
      let searchResults = this.state.searchResults.filter( user => user.username.includes(this.state.inputValue));

      this.setState({searchResults: searchResults}, () => (console.log("")));

    });
  }

// this.props.history.push(`/messages/${response.id}`

  handleSubmit(){
    this.props.createDirectMessage({channel: {user_ids: this.state.users}}).then(response => this.props.history.push(`/messages/${response.dms.id}`)).then(() => this.props.changeToHide());    
    this.setState({inputValue: "", users: [], searchResults: this.props.dmCandidates, selected: []});
  }

  render(){

    const dmCandidates = this.state.searchResults.map(user => {

        return(
          <li key={user.id} className="channels-modal-list-item" onClick={this.aggregateDMUsers(user)}>
            {user.username}
          </li>
      );
    });

    const selectedUsers = this.state.selected.map(user => {
      return(

        <li key={user.id} className="selected-users-input">{user.username}</li>

      );
    });

    return(
      <section id="modal_id" className={this.props.dmsModalShow}>
        <div className="outermost-channels-modal-div">
          <div className="channels-modal-close-X">
            <span  onClick={() => this.props.changeToHide()}>✕</span>
          </div>
          <div className={`channels-modal-list-of-channels`}>
            <div className="header-modal-list-of-channels">
              <span>Direct Messages</span>
              <br/>
              <br/>
              <br/>
            </div>
            <form onSubmit={() => this.handleSubmit()}>
              <div id="users-selected-from-search">{selectedUsers}</div>
              <input id="new-channel-title-input" placeholder="Start a conversation" value={this.state.inputValue} onChange={(e) => this.handleInput(e)}/>
            </form>
            <ul>
              {dmCandidates}
            </ul>
          </div>
      </div>
      </section>
    );


  }


}

export default withRouter(DMsModal);
