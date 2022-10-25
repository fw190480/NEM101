import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos, deleteTodos, getTodos, updateTodos } from '../redux/todos/action.todos'

const Todos = () => {
    const [text,setText] = useState('');
    
    useEffect(()=>{
        getTodos(dispatch(getTodos()))
    },[])

    const {todos} = useSelector(store=>store.todos)
    const dispatch = useDispatch();
    const handleTodoClick = ()=>{
        dispatch(addTodos(text));
        setText("")
        
    }
  return (
    <div className='todos'>
        <div className='todosInput'>
            <input  type="text" value={text} onChange={({target})=>setText(target.value)} />
            <button onClick={handleTodoClick} >ADD Todos</button>
        </div>
        <div className="displayTods">
            {/* {text} */}
            {todos.map(item=><div key={item.id} >{item.name}
            <small 
                onClick={()=>dispatch(updateTodos({id:item.id,status:item.status}))}
                style={item.status?{color:"green"}:{color:"red"}}
                >
                {item.status?"Completed":"Not completed"}
            </small>
            <button onClick={()=>dispatch(deleteTodos({id:item.id}))} >DELETE</button>
            </div>)}
        </div>
    </div>
  )
}

export default Todos