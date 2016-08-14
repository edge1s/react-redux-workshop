import React, {PropTypes, Component} from 'react';
import {getPosts} from '../services/posts';

class App extends Component {
  constructor(props) {
    super(props);

    getPosts()
      .then(posts => {
        this.props.attachPosts(posts);
      });
  }

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

App.PropTypes = {
  attachPosts: PropTypes.func
};

export default App;