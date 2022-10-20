import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "./actionType.todos"

export const addTodos = (payload)=>{
    return {
        type:ADD_TODOS,
        payload :{
            name:payload,
            status:false,
            id:Date.now()
        }
    }
}
export const updateTodos = (payload)=>{
    return {
        type:UPDATE_TODOS,
        payload
    }
}
export const deleteTodos = (payload)=>{
    return {
        type:DELETE_TODOS,
        payload
    }
}