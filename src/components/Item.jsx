import DraggableResizableWrapper from "./DraggableResizableWrapper";
import TodoItem from "./TodoItem/TodoItem";

const Item = ({ todo }) => {
  return (
    <DraggableResizableWrapper>
      <TodoItem todo={todo} />
    </DraggableResizableWrapper>
  );
};

export default Item;

