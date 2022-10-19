// export {increment,decrement} from "./action.js";
// export {action} from "./action.js"

export const reducer = (store,action)=>{
switch(action.type){
    case "INC":return {...store,count:store.count+action.payload}
    case "DEC":return {...store,count:store.count-action.payload}
    case "ADD":return  {...store,todos:[...store.todos,action.payload]}
    default: return store
}
}