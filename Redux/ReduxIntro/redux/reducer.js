export {increment,decrement} from "./action.js";
export {action} from "./action.js"

export const reducer = (store,action)=>{
switch(action.type){
    case "INC":return state.count+action.payload
    case "DEC":return state.count-action.payload
    case "ADD":return {}
    default: return state
}
}