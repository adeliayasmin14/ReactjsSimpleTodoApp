
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({isRefresh, setRefresh}) => {
	const todos = useSelector((state)=>state.todos.todos)


  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;