import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'this is a text value',
      value1: 2,
      value2: 2
    };
  }

  update = () => {
    console.log('button was clicked');
    this.setState({ value1: this.state.value1 + 1 });
  };
  updatePlus3 = () => {
    console.log('button was clicked');
    this.setState({ value1: this.state.value1 + 3 });
  };
  updateMinus3 = () => {
    console.log('button was clicked');
    this.setState({ value1: this.state.value1 - 3 });
  };

  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <h1>
          {this.state.value1} + {this.state.value2}
        </h1>
        <h1>{this.state.value1 + this.state.value2} </h1>
        <br />
        <button onClick={this.update}>+1</button>
        <button onClick={this.updatePlus3}>+3</button>
        <button onClick={this.updateMinus3}>-3</button>
      </>
    );
  }
}

//used to check incoming props from a parent
// Child.propTypes = {
//   text: PropTypes.string
// };

export default Child;
