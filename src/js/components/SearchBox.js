import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import {search} from '../actions/blog';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: ''
    }
  }

  render() {
    return (
      <div className="search-box">
        <form className="search-box__form" onSubmit={event => {
          event.preventDefault();
          this.props.dispatch(search(this.state.searchVal));
        }}>
          <input type="text" value={this.state.searchVal} onChange={event => {
            this.setState({searchVal: event.target.value});
          }}/>
          <input type="submit" value="search"/>
        </form>
      </div>
    )
  }
}

// it's not good approach. I won't continue with it. Go to next step.
export default connect()(SearchBox);
