import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../store/modules/todoSlice"
export default configureStore({
  reducer: {
    todos: todoReducer
  },
})