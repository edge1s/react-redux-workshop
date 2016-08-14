import React, {PropTypes, Component} from 'react';

import {search} from '../actions/blog';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-box">
        <form className="search-box__form" onSubmit={event => {
          event.preventDefault();
          this.props.search(this.props.searchInputVal);
        }}>
          <input type="text" value={this.props.searchInputVal} onChange={event => {
            this.props.setSearchInput(event.target.value);
          }}/>
          <input type="submit" value="search"/>
        </form>
      </div>
    )
  }
}

SearchBox.propTypes = {
  search: PropTypes.func,
  setSearchInput: PropTypes.func,
  searchInputVal: PropTypes.string
};

export default SearchBox;
