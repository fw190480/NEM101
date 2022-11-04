import axios from 'axios'
import React,{useEffect} from 'react'
import { useState } from 'react';

const Posts = () => {

    console.log(post)
  return (
    <div>

    {post && post.map(item=>{
        return (
            <h3 key={item.id} >{item.author}</h3>
        )
    })}
    


    </div>
  )
}

export default Posts