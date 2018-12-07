import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class RecentSearchesModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {inputValue: "", selected: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubnmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps.dmsModalShow != this.props.dmsModalShow){
      this.setState({inputValue: "", users: [], searchResults: this.props.dmCandidates, selected: []});
    }
  }


  handleInput(e){
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(){

  }

  render(){

    return(

      <div className={this.props.recentSearchesModalShow} id="recentSearchModal" >
        <div id="recentSearchModal-searchBar">
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="🔍            Search" onChange={this.handleInput} value={this.state.inputValue}/>
            </form>
          </div>
          <button>Clear</button>
          <button onClick={this.props.changeToHide}>✕</button>
        </div>

      </div>

    );

  }


}

export default withRouter(RecentSearchesModal);
