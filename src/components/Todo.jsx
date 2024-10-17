import List from "./List";
import Form from "./Form";
import EndedTodo from "../components/EndedTodo"
const Todo = () => {
  return (
    <div className="flex">
      <div className="w-2/3">
        <List />
      </div>
      <div className="w-1/3">
        <Form />
        <EndedTodo/>
      </div>
    </div>
  );
};
export default Todo;
