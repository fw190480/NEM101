import { DEC, INC } from "./actionType.counter"

const initSt = {
    count:0
}
export const counterReducer = (state=initSt,action)=>{
switch(action.type){
    case INC:{
        return{...state,count:state.count+action.payload}
    }
    case DEC:{
        return{...state,count:state.count-action.payload}
    }
    default:return state
}
}