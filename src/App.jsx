import React, { Component } from 'react';
import Expand from './Expand.jsx';


class App extends Component {
  state = {
    isOpen: false,
  }
  hideText = () => {
    this.setState({
      isOpen: false,
    })
  }
  showText = () => {
    this.setState({
      isOpen: true,
    })
  }
  render() {
    return(
      <div className="app">
        <Expand isOpen={this.state.isOpen} onClick={this.hideText} title="some title">
        <p>Some text</p>
        </Expand>
      </div>
    );
  }
}

export default App;