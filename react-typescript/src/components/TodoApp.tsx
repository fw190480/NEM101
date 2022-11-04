import React, { useState } from 'react'
import Todo from './TodoItem';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
type Todo = {
    id:number;
    content:string;
    isCompleted:boolean;
}


const TodoApp = () => {
    const [todos,setTodos] = useState<Todo[]>([{id:1,content:'rahul',isCompleted:false}]);
    const addTodo = (text:string)=>{
        setTodos([...todos,{id:Date.now(),content:{text},isCompleted:false}])
    }
    return(

        <div>
            <h4>Todo App</h4>
            <TodoInput addTodo ={addTodo} />
            {
                todos.map(item=><TodoItem/>)
            }
           
        </div>
    )

}

export default TodoApp