import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from 'react'

// let init = {
//     id:1,
//     content:"my first todo",
//     isCompleted:false
// }
const TodoInput = (props:any) => {
    const {addTodo} = props
    const [text, setText] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        // e.preventDefault()
        e.preventDefault()
        addTodo(text)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <button>ADD</button>
            </form>
        </div>
    )
}

export default TodoInput