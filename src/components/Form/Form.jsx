import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/modules/todoSlice";
import dayjs from 'dayjs'
const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      isEditing: false,
      //現在のunixタイムスタンプを保存
      timestamp:dayjs().valueOf()
    };
    dispatch(addTodo({ todo: newTodo }));
    setEnteredTodo("");
  };
  return (
    <div className="grid justify-items-end">
      <form onSubmit={add}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          placeholder="todoを入力"
        />
        <button className="bg-blue-500 text-white px-4 py-2">送信</button>
      </form>
    </div>
  );
};
export default Form;
