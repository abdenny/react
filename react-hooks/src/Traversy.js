import React, { useState } from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className='todo'
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>
          Mark Task as Complete
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        placeholder='add a todo'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'learning hooks',
      isCompleted: true,
    },
    {
      text: 'using react',
      isCompleted: true,
    },
    {
      text: 'what are classes lol',
      isCompleted: false,
    },
  ]);
  console.log(todos);

  const addToDo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    let newTodos = [...todos];
    newTodos[index].isCompleted = true;
    console.log(newTodos);
    // setTodos(newTodos);
  };
  return (
    <div className='App'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            completeTodo={completeTodo}
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addToDo} />
      </div>
    </div>
  );
};

export default App;
