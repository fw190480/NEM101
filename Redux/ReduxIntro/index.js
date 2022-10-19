import { store } from "./redux/store.js";
import { increment,decrement,add_todos} from "./redux/action.js";
store.dispatch(increment(10))
store.dispatch(increment(10))
store.dispatch(decrement(10))
store.dispatch(add_todos({id:4,name:'rahul'}))
store.dispatch(add_todos({id:4,name:'rahul'}))
store.dispatch(add_todos({id:4,name:'rahul'}))
console.log(store.getState())
