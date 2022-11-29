import {createSlice} from "@reduxjs/toolkit";
export const TodosSlice = createSlice({
	name:"todos",
	initialState:{
		todos: [
			{
				"id": 1,
				"title": "Hit the gym",
				"done": false
			},
			{
				"title": "Testing data",
				"done": false,
				"id": 2
			},
		]
	},
	reducers:{
		removefromTodo:(state,action)=>{
			const removeFromtodos = state.todos.filter((item)=>item.id !== action.payload.id);
			state.todos = removeFromtodos;
		},
			
	updateTodo:(state,action) =>{
		const findTodos = state.todos.find((item)=>item.id === action.payload.id);
		findTodos.done = !findTodos.done;
	},
	addTodo : (state,action)=>{
			state.todos.push({...action.payload})}
	},

});


export const {addTodo,removefromTodo,updateTodo}= TodosSlice.actions

export default TodosSlice.reducer;