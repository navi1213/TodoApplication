import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/modules/todoSlice";

const TodoItem = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatch();

  const complete = () => {
    dispatch(deleteTodo({ todo }));
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, isEditing: !todo.isEditing };
    dispatch(updateTodo({ todo: newTodo }));
  };

  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      isEditing: false,
    };
    dispatch(updateTodo({ todo: newTodo }));
  };

  useEffect(() => {
    setEditingContent(todo.content);
  }, [todo.content]);

  return (
    <div>
      <button
        onClick={complete}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        完了
      </button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.isEditing ? (
          <input value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default TodoItem;
