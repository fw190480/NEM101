import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter/counter.action';

function App() {
  const store = useSelector(store=>store.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <h1>{store}</h1>
    <button onClick={()=>dispatch(increment())} >INC</button>
    <button onClick={()=>dispatch(decrement())} >DEC</button>
    </div>
  );
}

export default App;
