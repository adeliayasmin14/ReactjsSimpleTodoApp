import {configureStore} from "@reduxjs/toolkit";
import TodosReducer from "./TodosReducer";

export default configureStore({
	reducer:{
		todos:TodosReducer
	}
})