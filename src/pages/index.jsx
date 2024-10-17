import { Provider } from "react-redux";
import store from "../store";
import "../index.css"; 

import TodoItem from "../components/TodoItem/TodoItem";
import Form from "../components/Form/Form";
import EndedTodo from "../components/EndedTodo";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex">
          <div className="w-2/3">
            <TodoItem />
          </div>
          <div className="w-1/3">
            <Form />
            <EndedTodo/>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
