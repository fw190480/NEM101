import { DEC, INC } from "./counter.types"

const initilState ={
    count:0
}

export const counterReducer = (state=initilState,action)=>{

    switch(action.type){
        case INC :return {...state,count:state.count+1}
        case DEC :return {...state,count:state.count-1}
        default : return state
    }
}