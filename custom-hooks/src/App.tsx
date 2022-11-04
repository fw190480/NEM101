import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
     <Counter/>
     {/* <StopWatch/> */}
     <Posts/>
    </div>
  );
}

export default App;
