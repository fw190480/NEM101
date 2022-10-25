import { ADD_TODOS, DELETE_TODOS, GET_TODOS, UPDATE_TODOS } from "./actionType.todos"

const initS = {
    todos:[]
}
export const todosReducer = (state=initS,action)=>{
    switch(action.type){
        case GET_TODOS:{
            return{
                ...state,
                todos:action.payload
            }
        }
        case ADD_TODOS :{
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        }
        case UPDATE_TODOS :{
            const {status,id} = action.payload;
            let updatedTodos = state.todos.map(item=>{
                if(item.id==id){
                    return {
                        ...item,status:!status
                    }
                }else return item;
            })
            return {
                ...state,
                todos:updatedTodos
            }
        }
        case DELETE_TODOS :{
            const {id} = action.payload;
            let filtered = state.todos.filter(item=>item.id!==id);
            return{
                ...state,
                todos:filtered
            }
        }
        default : return state;
    }
}