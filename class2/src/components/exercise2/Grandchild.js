import React, { Component } from 'react';
class Grandchild extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red', padding: '10px' }}>
        I am a grandchild
      </div>
    );
  }
}
export default Grandchild;
