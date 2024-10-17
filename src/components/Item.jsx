import { useState, useEffect } from "react";
import { deleteTodo, updateTodo } from "../store/modules/todoSlice";
import { useDispatch } from "react-redux";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatch();

  const complete = (todo) => {
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
      isEditing: false, // 編集後はfalseに
    };
    dispatch(updateTodo({ todo: newTodo }));
  };

  // todoの内容が変更されたときに、inputの値も更新する
  useEffect(() => {
    setEditingContent(todo.content);
  }, [todo.content]);

  return (
    <div className="bg-yellow-200 p-4 rounded">
      <button
        onClick={() => complete(todo)}
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

export default Item;

