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
        onClick={() => complete(todo)}
        className="absolute top-2 right-2 bg-red-500 text-white font-bold rounded-full p-1"
      >
        ×
      </button>
      <form onSubmit={confirmContent} className="h-full">
        {todo.isEditing ? (
          <textarea
          value={editingContent}
          onChange={changeContent}
          className="w-full h-full p-2 border rounded resize-none overflow-auto"
          style={{ minHeight: "100px", maxHeight: "300px" }} // 最小・最大の高さを設定
        />
        ) : (
          <div
            className="h-full w-full p-2"
            onDoubleClick={toggleEditMode}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {todo.content}
          </div>
        )}
      </form>
    </div>
  );
};

export default TodoItem;
