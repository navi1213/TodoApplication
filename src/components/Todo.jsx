import List from "./List";
import Form from "./Form";

const Todo = () => {
  return (
    <div className="flex">
      <div className="w-2/3">
        <List />
      </div>
      <div className="w-1/3">
        <Form />
      </div>
    </div>
  );
};
export default Todo;
