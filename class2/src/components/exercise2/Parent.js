import React, { Component } from 'react';
import Child from './Child';
class Parent extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'green', padding: '10px' }}>
        Parent Componet
        <br />
        <Child />
      </div>
    );
  }
}
export default Parent;
