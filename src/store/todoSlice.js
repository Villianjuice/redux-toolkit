import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        todo: action.payload.text,
        comleted: false,
      });
    },
    handleTodoComplete(state, action) {
      const todoCompleted = state.todos.find((todo) => todo.id === action.payload.id);
      todoCompleted.comleted = !todoCompleted.comleted;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodos, handleTodoComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
