import { useSelector } from "react-redux"
import Item from "./Item"

const List = () => {
    const todos = useSelector(state=>state.todos.todos)
    return  (
        <div>
          {todos.map((todo) => {
            return <Item key={todo.id} todo={todo} />;
          })}
        </div>
      );
    };
export default List