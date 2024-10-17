import DraggableResizableWrapper from "./DraggableResizableWrapper";
import TodoItem from "./TodoItem";

const Item = ({ todo }) => {
  return (
    <DraggableResizableWrapper>
      <TodoItem todo={todo} />
    </DraggableResizableWrapper>
  );
};

export default Item;

