import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { searchterm: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchterm}
          onChange={evt => this.onInputChange(evt.target.value)} />
      </div>
    );
  }

  onInputChange(searchterm){
    this.setState({searchterm});
    this.props.onSearchTermChange(searchterm);
  }
}

export default SearchBar;
