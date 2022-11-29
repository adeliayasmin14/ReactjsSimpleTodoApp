import { useDispatch } from "react-redux";
import { removefromTodo,updateTodo } from "../Redux/TodosReducer";
import {useNavigate  } from 'react-router-dom';
const TodoItem = ({ todo, setRefresh }) => {
	const dispatch = useDispatch();
	const Navigation = useNavigate ();

	const updateTodos = () => {	
		dispatch(updateTodo(todo));
      console.log('update Todo .')
   
  };

  const deleteTodo = () => {	
		dispatch(removefromTodo(todo));
      console.log('todo deleted.')
   
  };
	const navigate=()=>{
		Navigation("/Detail",{
			state:todo
		})
	}

  return (
    <li className={`${todo.done ? "checked" : ""}`} key={todo.id}>
      <div onClick={navigate}>{todo.title}</div> 
			<span className="update" onClick={updateTodos}>Update</span>
      <span className="close" onClick={deleteTodo}>x</span>
    </li>
  );
};

export default TodoItem;