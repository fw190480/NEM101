import React, { useReducer } from 'react'
import { useMyReducer } from '../CustomHook/useMyReducer';

enum CountType{
    INC,
    DEC
}

type State = {
    count:number
}
type Action = {
type:CountType;
payload:number
}

const reducer = (state:State,action:Action)=>{
    switch(action.type){
        case CountType.INC:{
            return {
                ...state,
                count:state.count+1
            }
        }
        case CountType.DEC:{
            return {
                ...state,
                count:state.count-1
            }
        }
        return state
    }
}
const Counter = () => {
    const [state,dispatch] = useMyReducer(reducer,{count:0})


  return (
    <div>Counter

        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:CountType.INC,payload:1})} >+</button>
        <button onClick={()=>dispatch({type:CountType.DEC,payload:1})} >-</button>
    </div>
  )
}

export default Counter