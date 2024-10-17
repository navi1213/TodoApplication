import { useSelector } from "react-redux"
import Item from "./Item"

const List = () => {
    const todos = useSelector(state=>state.todos.todos)
    return  (
        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
          {todos.map((todo) => {
            return <Item key={todo.id} todo={todo} />;
          })}
        </div>
      );
    };
export default List