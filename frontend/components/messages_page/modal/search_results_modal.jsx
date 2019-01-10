import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class SearchResultsModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {inputValue: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addToSearch(this.state.inputValue);
    this.props.search(this.state.inputValue);
  }

  componentDidUpdate(prevProps,prevState){
    if (prevProps.searchResultsModalShow != this.props.searchResultsModalShow){
      this.setState({inputValue: ""});
    };
  }

  handleClick(channel_id){
    this.props.changeToHide();
    this.props.history.push(`/messages/${channel_id}`);
  }

  handleInput(e){
    this.setState({inputValue: e.target.value});
  }

  render(){
    let searchResultsList = [];
    if(this.props.searchResults != {}){
      searchResultsList = this.props.searchResults.map(result => {
        return(
          <li key={result.id} className="search-result-message-box" onClick={() => this.handleClick(result.channel_id)}>
            <div>
                <div className="Received-Message-Box">
                  <div className="Received-Message-Box-left">
                    <img id="profile-pic-img" src={window.slack_profile_pic} />
                  </div>
                  <div className="Received-Message-Box-right">
                    <div className="Received-Message-Box-right-top">
                      <div className = "Recieved-Message-Box-right-top-name">
                        {this.props.authors[result.user_id].username}
                      </div>
                      <div className = "Recieved-Message-Box-right-top-time">
                        {strToDate(result.created_at.slice(11,16))}
                      </div>
                    </div>
                    <div className="Received-Message-Box-right-bottom">
                      {result.body}
                    </div>
                  </div>
                </div>
            </div>
          </li>
        );
      });
    };

    return(
      <div className={this.props.searchResultsModalShow} onClick={e => e.stopPropagation()}>
        <div id="search-results-modal-search-results-search-bar">
          <span>      🔍</span>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder={this.props.query} value={this.state.inputValue} onChange={this.handleInput}/>
          </form>
          <span onClick={this.props.changeToHide}>✕</span>
        </div>
        <div id="search-results-modal-search-results-description">
          <p>Messages</p>
        </div>
        <div id="search-results-modal-search-results-summary">
          <p>{searchResultsList.length} results</p>
        </div>
        <div id="search-results-modal-search-results-messages">
          <ul>
            {searchResultsList}
          </ul>
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


export default withRouter(SearchResultsModal);
