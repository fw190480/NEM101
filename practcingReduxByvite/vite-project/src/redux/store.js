import {legacy_createStore,combineReducers,compose} from "redux";
import { counterReducer } from "./counter/reducer.counter";
import { todosReducer } from "./todos/reducer.todos";

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = combineReducers({
    counter:counterReducer,
    todos:todosReducer
})

export const store = legacy_createStore(rootReducer,createCompose())