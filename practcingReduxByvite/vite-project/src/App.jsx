import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
    <Counter/>
    <Todos/>
   
    </div>
  )
}

export default App
