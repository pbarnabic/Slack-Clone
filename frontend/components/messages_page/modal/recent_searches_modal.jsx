import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class RecentSearchesModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {inputValue: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps.recentSearchesModalShow != this.props.recentSearchesModalShow){
      this.setState({inputValue: ""});
    }

    if(prevProps.recentSearches != this.props.recentSearches){
      this.forceUpdate();
    }
  }

  clearSearch(){
    this.setState({inputValue: ""});
  }


  handleInput(e){
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addToSearch(this.state.inputValue);
    this.props.search(this.state.inputValue);
    this.setState({inputValue: ""});
    this.props.changeToHide();
    this.props.showSearchResultsModal();
  }

  handleSearchAgain(search){
    this.props.addToSearch(search);
    this.props.search(search);
    this.setState({inputValue: ""});
    this.props.changeToHide();
    this.props.showSearchResultsModal();
  }

  render(){

    let selectFive = this.props.recentSearches.slice(-5,-1).map(search => {
      return(
        <li className="recent-Search-Query" key={search + Math.random()} onClick={() => this.handleSearchAgain(search)}>
          <span>🔍     {search}</span>
        </li>
      );
    })


    return(

      <div className={this.props.recentSearchesModalShow} id="recentSearchModal" onClick={e => e.stopPropagation()} >
        <div id="recentSearchModal-searchBar">
          <div id="recentSearchModal-searchBar-input">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="🔍     Search" onChange={this.handleInput} value={this.state.inputValue} />
            </form>
          </div>
          <div id="recentSearchModal-searchBar-buttons">
            <button onClick={this.clearSearch}>Clear</button>
            <button onClick={this.props.changeToHide}>✕</button>
          </div>
        </div>

        <div id="last-five-searches">
          <div id="last-five-searches-pos">
            <p>Recent Searches</p>
            {selectFive}
          </div>
        </div>

      </div>

    );

  }


}

export default withRouter(RecentSearchesModal);
