import { exec } from 'child_process';
import React from 'react'
import { useState, useEffect } from 'react';

const useApi = (apiFn,init) => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [data,setData] = useState([])

    function execute (){
        setLoading(true)
        try{
            let data = apiFn();
            setData(data);
        }catch(err){
            setError(true)
        }finally{
            setLoading(true)
        }
    }
    useEffect(()=>{
        execute()
    },[])

  return {loading,error,data,refresh:execute}
}

export default useApi