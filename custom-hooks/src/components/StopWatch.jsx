import React, { useRef } from 'react'
import { useState } from 'react';
import useStopWatch from '../CustomHook/useStopWatch';

const StopWatch = () => {
    const {timer,start,stop,reset} = useStopWatch(0)
    console.log(timer)
    // const [timer,setTimer] = useState(0)
    // const timerId = useRef(null)

    // const start = ()=>{
    //     if(!timerId.current){
    //     timerId.current  = setInterval(()=>{
    //         setTimer((prev)=>prev+1)
    //     },1000)
    // }
    // }
    // const stop = ()=>{
    //     clearInterval(timerId.current);
    //     timerId.current=null
    // }
    // const reset = ()=>{
    //     clearInterval(timerId.current);
    //     timerId.current=null
    //     setTimer(0)
    // }
    // console.log(timer)
    
  return (
    <div>StopWatch
        <div>
            <h3>{timer}</h3>
        </div>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch