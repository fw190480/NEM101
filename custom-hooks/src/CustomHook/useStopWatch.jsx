
import React, { useEffect, useRef, useState } from 'react'

const useStopWatch = (init) => {

    const [timer,setTimer] = useState(init)
    const timerId = useRef(null)

    const start = ()=>{
        if(!timerId.current){
        timerId.current  = setInterval(()=>{
            setTimer((prev)=>prev+1)
        },1000)
    }
    }
    const stop = ()=>{
        clearInterval(timerId.current);
        timerId.current=null
    }
    const reset = ()=>{
        clearInterval(timerId.current);
        timerId.current=null
        setTimer(0)
    }
    useEffect(()=>{
        return reset
    })

return {timer,start,stop,reset}
}

export default useStopWatch