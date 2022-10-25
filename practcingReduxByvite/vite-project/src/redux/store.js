import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import { counterReducer } from "./counter/reducer.counter";
import { todosReducer } from "./todos/reducer.todos";

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = combineReducers({
    counter:counterReducer,
    todos:todosReducer
})
const logger = (state)=>(next)=>(action)=>{
    // console.log('action',action,typeof action);
    console.log(state)
    if(typeof action =='function'){
        return action(state.dispatch,state.getState)
    }
    return next(action)
}

export const store = legacy_createStore(rootReducer,applyMiddleware(logger))