import { ADD_TODO } from "./actionType"

// to have all state mangement in on function 
let initialState = { count: 1,todos:[] }
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter/increment": {
            return { ...state,count: state.count + action.payload }
        }
        case "counter/decrement": {
            return {
                ...state,
                count: state.count - action.payload
            }
        }
        case ADD_TODO :{
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        }
        default: {
            return state
        }
    }
}