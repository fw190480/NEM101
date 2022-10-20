import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, decrement, increment } from './redux/action';
import { useState } from 'react';

function App() {
  const [num,setNum] = useState()
  const [mytodos,setTodos] = useState('')

  // useSelector(state=>{
  //   console.log(state)
  // })

  const {count,todos} = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(todos)

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>INC</button>
        <button onClick={() => dispatch(decrement())}>DEC</button>
        <div>
          <input onChange={(e)=>setNum(e.target.value)} type="number" />
          <button onClick={() => dispatch(increment(Number(num)))}>INC</button>
          <button onClick={() => dispatch(decrement(Number(num)))}>DEC</button>

        </div>
        <div className='todos' >
          <input onChange={({target})=>setTodos(target.value)}/>
            {todos.map((item,index)=><div key={index}>{item}</div>)}
          <button onClick={()=>dispatch(addTodos(mytodos))} >Add Todos</button>
        </div>
      </header>
    </div>
  );
}

export default App;
