import React, { Component } from 'react';

class SimpleDropdown extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <select>
          {this.props.days.map((day, index) => {
            return (
              <option key={index} value={day}>
                {day}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}

export default SimpleDropdown;
