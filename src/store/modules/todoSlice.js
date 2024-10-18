import { createSlice } from "@reduxjs/toolkit";
import formatDate from "../../functions/formatDate";
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 1,
        content: "買い物に行く",
        isEditing: false,
        date:"2024-10-18 22:00 金曜日"
      },{
        id: 2,
        content: "卵買う",
        isEditing: false,
        date:"2024-10-18 22:00 金曜日"
      },
      {
        id: 3,
        content: "郵便出す",
        isEditing: false,
        date:"2024-10-18 22:00 金曜日"
      }
    ],
    endedTodos:[]
  },
  reducers: {
    addTodo: (state, { type, payload }) => {
      state.todos.push(payload.todo);
    },
    deleteTodo: (state, { type, payload }) => {
      const d = new Date();
      state.endedTodos.push({...payload.todo,date:formatDate(d, "YYYY-MM-DD hh:mm date")});
      state.todos = state.todos.filter((_todo) => {
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
  },
});


export const { addTodo, deleteTodo, updateTodo,reorderTodos ,addDeletedTodos} = todoSlice.actions;

export default todoSlice.reducer;
