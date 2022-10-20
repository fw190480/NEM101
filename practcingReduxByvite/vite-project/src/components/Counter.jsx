import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "../redux/counter/action.counter"

const Counter = () => {
    const [countN,setCount] = useState(1);
    const {count} = useSelector(store=>store.counter);
    const dispatch = useDispatch()

    const handleClick = (type)=>{
        let num = +countN;
        switch(type){
            case 'inc' :{
                dispatch(increment(num));
                break;
            }
            case 'dec' :{
                dispatch(decrement(num))
                break;
            }
        }
    }
  return (
    <div className='counter' >
        <section>
            <h1>{count}</h1>
        </section>
        <div className="input">
            <input type="number" onChange={({target})=>setCount(target.value)} />
        </div>
        <div className="btn">
            <button onClick={()=>handleClick("inc")}  >Add</button>
            <button onClick={()=>handleClick("dec")} >REDUCE</button>
        </div>
    </div>
  )
}

export default Counter