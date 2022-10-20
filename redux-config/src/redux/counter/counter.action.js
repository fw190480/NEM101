import { DEC, INC } from "./counter.types";

export const increment = ()=>(
    {

        type:INC
    }
)
export const decrement = ()=>(
    {

        type:DEC
    }
)