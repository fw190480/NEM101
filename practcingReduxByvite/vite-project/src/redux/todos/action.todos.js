import axios from "axios";
import { ADD_TODOS, DELETE_TODOS, GET_TODOS, UPDATE_TODOS } from "./actionType.todos";

export const getTodos = () => async(dispatch)=>{
    let responce = await axios.get("http://localhost:8000/todos");
    let data = await responce.data;
    // console.log(data)
    dispatch( {
        type: GET_TODOS,
        payload: data
    })
}

export const addTodos = (payload) => {
    return {
        type: ADD_TODOS,
        payload: {
            name: payload,
            status: false,
            id: Date.now()
        }
    }
}
export const updateTodos = (payload) => {
    return {
        type: UPDATE_TODOS,
        payload
    }
}
export const deleteTodos = (payload) => {
    return {
        type: DELETE_TODOS,
        payload
    }
}