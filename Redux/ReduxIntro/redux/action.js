import {INC,DEC,ADD} from "./actionTypes.js";

export const increment = (payload)=>({type:INC,payload})
export const decrement = (payload)=>({type:DEC,payload})
export const add_todos = (payload)=>({type:ADD,payload})