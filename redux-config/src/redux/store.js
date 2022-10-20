
import { legacy_createStore,compose ,combineReducers} from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    todoAPP:todoReducer
})

const crateComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
export const store = legacy_createStore(rootReducer,crateComposer())