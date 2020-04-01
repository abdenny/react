import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      tasks: []
    };
  }
  addNewTask = e => {
    this.setState({
      task: e.target.value
    });
  };

  submitNewTask = e => {
    console.log(this.state.task);
    this.setState({
      tasks: [...this.state.tasks, this.state.task]
    });
    console.log(this.state.tasks);
  };

  render() {
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
            <ul>
              <li>
                {this.state.taskBeingAdded} <button>Mark as Complete</button>
              </li>
            </ul>
          </div>
          <div className='Complete'>
            <h4>Complete Items</h4>
            <ul>
              <li>
                Text <button>Mark as Incomplete</button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
