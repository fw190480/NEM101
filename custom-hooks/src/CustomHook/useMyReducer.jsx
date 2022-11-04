import { useState } from "react"

export function useMyReducer(reducerFn,init){
    const [state,seState] = useState(init);

    const dispatch = (action)=>{
        const updatedState = reducerFn(state,action);
        seState(updatedState)

    }
    return [state,dispatch]
}