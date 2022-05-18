import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, handleTodoComplete } from '../store/todoSlice';

const TodoItem = ({ id, todo, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        className="check"
        type="checkbox"
        onChange={() => dispatch(handleTodoComplete({ id }))}
      />
      <span>{todo}</span>
      <span onClick={() => dispatch(deleteTodo({ id }))}>&times;</span>
    </li>
  );
};

export default TodoItem;
