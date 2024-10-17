import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import DraggableResizableWrapper from "./DraggableResizableWrapper";
import { deleteTodo, updateTodo } from "../../store/modules/todoSlice";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos.todos);
  const [editingContent, setEditingContent] = useState("");
  const dispatch = useDispatch();

  const complete = (todo) => {
    dispatch(deleteTodo({ todo }));
  };

  const toggleEditMode = (todo) => {
    const newTodo = { ...todo, isEditing: !todo.isEditing };
    dispatch(updateTodo({ todo: newTodo }));
  };

  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };

  const confirmContent = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      isEditing: false,
    };
    dispatch(updateTodo({ todo: newTodo }));
  };

  useEffect(() => {
    if (todos.length > 0) {
      setEditingContent(todos[0].content);
    }
  }, [todos]);

  return (
    <div>
      {todos.map((todo) => (
        <DraggableResizableWrapper key={todo.id}>
          <div>
            <button
              onClick={() => complete(todo)}
              className="absolute top-2 right-2 bg-red-500 text-white font-bold rounded-full p-1"
            >
              ×
            </button>
            <form onSubmit={(e) => confirmContent(e, todo)} className="h-full">
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
                  onDoubleClick={() => toggleEditMode(todo)}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {todo.content}
                </div>
              )}
            </form>
          </div>
        </DraggableResizableWrapper>
      ))}
    </div>
  );
};

export default TodoItem;