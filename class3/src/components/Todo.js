import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      tasks: [],
      completedTask: ''
    };
  }
  addNewTask = e => {
    this.setState({
      task: e.target.value
    });
  };

  submitNewTask = e => {
    this.setState({
      tasks: this.state.tasks.concat([this.state.task])
    });
  };

  completeTask = e => {
    console.log('hi');
    this.setState({
      completedTask: e.target.previousSibling.wholeText
    });
  };

  render() {
    let pendingItems = this.state.tasks.map((item, index) => {
      return (
        <li key={index}>
          {item} <button onClick={this.completeTask}>Mark as Complete</button>
        </li>
      );
    });

    return (
      <>
        <div className='List'>
          <div className='Header'>
            <input type='text' onChange={this.addNewTask} />
            <button className='addButton' onClick={this.submitNewTask}>
              Add
            </button>
          </div>
          <div className='Pending'>
            <h4>Pending Items</h4>
            <ul>{pendingItems}</ul>
          </div>
          <div className='Complete'>
            <h4>Complete Items</h4>

            <ul>
              <li>
                text
                <button>Mark as Incomplete</button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
