import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 1,
        content: "買い物に行く",
        isEditing: false,
      },{
        id: 2,
        content: "卵買う",
        isEditing: false,
      },
      {
        id: 3,
        content: "郵便出す",
        isEditing: false,
      }
    ],
  },
  reducers: {
    addTodo: (state, { type, payload }) => {
      state.todos.push(payload.todo);
    },
    deleteTodo: (state, { type, payload }) => {
      state.todos = state.todos.filter((_todo) => {
        console.log(payload.todo);
        return _todo.id !== payload.todo.id;
      });
    },
    updateTodo: (state, { type, payload }) => {
      state.todos = state.todos.map((_todo) => {
        return _todo.id === payload.todo.id
          ? { ..._todo, ...payload.todo }
          : { ..._todo };
      });
    },
    reorderTodos: (state, {type,payload}) => {
      const { startIndex, endIndex } = payload;
      const [removed] = state.todos.splice(startIndex, 1);
      state.todos.splice(endIndex, 0, removed);
    },
  },
});


export const { addTodo, deleteTodo, updateTodo,reorderTodos } = todoSlice.actions;

export default todoSlice.reducer;
