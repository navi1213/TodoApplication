import { Provider } from "react-redux";
import store from "./store";
import Todo from "./components/Todo";
import "./index.css"; // src/index.js または src/App.js で
function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
