import React, { Component } from 'react';
import Grandchild from './Grandchild';
class Child extends Component {
  render() {
    return (
      <>
        I am a child
        <br />
        <Grandchild />
      </>
    );
  }
}
export default Child;
