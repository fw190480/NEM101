import axios from "axios";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.types";

export const addTodo = (payload) => ({ type: ADD_TODO, payload })
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload })
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload })

export const getTodos = async()=>{
    let responce = await axios.get("http://localhost/8000/todos")
    let data = responce.data;
    
}