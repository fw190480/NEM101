import { bindActionCreators } from "redux"
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.types"

const init = {
    todos:[]
}
export const todoReducer = (state=init,{action,payload})=>{
    switch(action.type){
        case ADD_TODO :{
            return {
                ...state,
                todos:[...state.todos,payload]
            }
        }
        case UPDATE_TODO :{
            const {id} = payload
            let updatedTodo = state.todos.map(item=>{
                if(item.id==id){
                    return payload
                }else return item
            })
            return {
                ...state,
                todos:updatedTodo
            }
        }
        case DELETE_TODO :{
            
            const {id} = payload
            let updatedTodo = state.todos.filter(item=>{
             return item.id!==id
            })
            return {
                ...state,
                todos:updatedTodo
            }
        }
    }
}