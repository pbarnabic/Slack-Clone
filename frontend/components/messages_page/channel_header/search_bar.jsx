import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.changeToShow = this.changeToShow.bind(this);
  }

  changeToShow(e){
    e.stopPropagation();
    this.props.changeToShow();

  }

  render(){
    return(
    <div className="header-right-side">
      <form>
        <input id="search-bar-in-header" type="text" placeholder="🔍 Search" onClick={e => this.changeToShow(e)}></input>
      </form>
    </div>
    );
  }
}

export default SearchBar;
