import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../Redux/TodosReducer";
const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState("");
	const dispatch = useDispatch();

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodos = () => {
		var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const newTodo = { title, done: false ,id:result};
		dispatch(addTodo(newTodo));
		console.log(newTodo);
		setTitle("");
		setRefresh(true);

		setTimeout(() => {
			alert("new todo added.");
		}, 500);
  };

  return (
    <div id="todo-header" className="header">
      <h2>Simple Todo App</h2>
      <input
        type="text"
        value={title}	
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className="add-button" onClick={addTodos}>
        Add
      </span>
    </div>
  );
};

export default Header;
