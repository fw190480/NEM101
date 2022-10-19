import {legacy_createStore as createStore} from "redux";
import { reducer } from "./reducer.js";
const init = {
    count:1,
    todos:[]
}
export const store = createStore(reducer,init)