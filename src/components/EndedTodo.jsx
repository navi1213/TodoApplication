import { useSelector } from "react-redux";

const EndedTodo = () => {
  // state.todoSlice.endedTodosから取得
  const endedTodos = useSelector((state) => state.todos.endedTodos);

  return (
    <>
      <h2>完了したTodo</h2>
      {endedTodos.length
        ? endedTodos.map((todo, index) => (
            <div key={index}>
              <span>{todo.content}</span>
            </div>
          ))
        : "完了したTodoはありません"}
    </>
  );
};

export default EndedTodo;
