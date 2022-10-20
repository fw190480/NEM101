import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getTodos } from '../redux/todo/todo.action'

const TodoApp = () => {
    const [value,setValue] = useState('')
    const todos = useSelector(store => store.todo.todos)
    const dispatch = useDispatch()
    useEffect(()=>{
        getTodos()
    },[])

    return (
        <header>

        
        {/* <div>
            {todos.map((item, i) => <div key={todo.id} >
                <div>
                {item.name} - {item.status}
                </div>
                </div>)}
        </div> */}

        {/* <div>
            <input value={text} type="text" onChange={({target})=>setValue(target.value)} />
        </div>
        <div>
            <button onClick={()=>{
                dispatch(
                    addTodo({
                        name:value,
                        status:'not completed',
                    })
                )
            }} >

            </button>
        </div> */}
        </header>
    )
}

export default TodoApp