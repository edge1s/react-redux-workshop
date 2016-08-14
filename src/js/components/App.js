import React, {PropTypes, Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchData();
  }

  render() {
    const {children, loading} = this.props;
    return (
      <div className="app">
        { !loading ?
          <div className="view">{children}</div> : 'Loading...' }
      </div>
    )
  }
}

App.propTypes = {
  fetchData: PropTypes.func,
  loading: PropTypes.bool
};

export default App;
