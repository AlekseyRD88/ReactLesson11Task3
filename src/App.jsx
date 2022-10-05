import React, { Component } from 'react';
import Expand from './Expand.jsx';


class App extends Component {
  state = {
    isOpen: false,
  }
  hideArrow = () => {
    this.setState({
      isOpen: false,
    })
  }
  showArrow = () => {
    this.setState({
      isOpen: true,
    })
  }
  render() {
    return(
      <div className="app">
        <Expand isOpen={this.state.isOpen} onClick={this.hideArrow} title="some title">
        <p>Some text</p>
        </Expand>
      </div>
    );
  }
}

export default App;