import React, { Component } from 'react';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  increment = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.increment}>Click</button>
        <H1 clicks={this.state.clicks} />
        {/* <H2 />
        <H3 /> */}
      </>
    );
  }
}

export default App;
