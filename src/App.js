import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { addTodos } from './store/todoSlice';

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [text, setText] = React.useState('');

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodos({ text }));
      setText('');
    }
  };
  return (
    <div className="App">
      <InputField text={text} addTask={addTask} setText={setText} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
