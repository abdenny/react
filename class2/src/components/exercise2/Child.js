import React, { Component } from 'react';
import Grandchild from './Grandchild';
class Child extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'pink', padding: '10px' }}>
        I am a child
        <br />
        <Grandchild />
      </div>
    );
  }
}
export default Child;
