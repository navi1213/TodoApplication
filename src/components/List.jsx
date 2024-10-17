import { useSelector ,useDispatch} from "react-redux"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderTodos } from "../store/modules/todoSlice"; 
import Item from "./Item"

const List = () => {
    const todos = useSelector(state=>state.todos.todos)
    const dispatch = useDispatch();
    const onDragEnd = (result) => {
        const { destination, source } = result;
        console.log(result);
        if (!destination) return; // ドロップ先がない場合
    
        // 並び替えの必要がない場合
        if (destination.index === source.index) return;
    
        dispatch(reorderTodos({
          startIndex: source.index,
          endIndex: destination.index
        }));
      };
    return  (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo-list">
            {(provided) => (
              <div
                className="grid grid-cols-3 gap-4 max-w-5xl mx-auto"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-yellow-200 p-4 rounded shadow-md"
                        style={provided.draggableProps.style}
                      >
                        <Item todo={todo}/>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
    };
export default List