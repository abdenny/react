import React, { Component } from 'react';
// import Child from './components/Child';
// import News from './components/News';
import Todo from './components/Todo';
class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {

  //   }
  // }

  render() {
    // let people = ['Matt', 'Eric', 'Tracy', 'Skylar', 'Melissa', 'Keith'];
    return (
      <>
        {/* <Child text='Hello World' integer={3} /> */}
        {/* <News /> */}
        <Todo />
      </>
    );
  }
}

export default App;
