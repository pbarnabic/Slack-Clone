import React from 'react';

class SearchBar extends React.Component{
  render(){
    return(
    <div className="header-right-side">
      <form>
        <input id="search-bar-in-header" type="text" placeholder="🔍 Search" onClick={this.props.changeToShow}></input>
      </form>
    </div>
    );
  }
}

export default SearchBar;
