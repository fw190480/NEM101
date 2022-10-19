 
import {INC,DEC, ADD_TODO} from "./actionType"

export const increment = (value=1)=>({
    type:INC,
    payload:value
})
export const decrement = (value=1)=>({
    type:DEC,
    payload:value
})

export const addTodos = (payload={})=>({
    type:ADD_TODO,
    payload:payload
})