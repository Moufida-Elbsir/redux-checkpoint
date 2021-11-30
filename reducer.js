import {ADD, COMPLETE, DELETE, EDIT} from "./action-types"

const init={
    todos:[
        {id:Math.random(),action:"wake up",isDone:false},
        {id:Math.random(),action:"breakfast",isDone:false}
    ]
}
const reducer=(state=init, {type,payload})=>{
switch (type){
    case DELETE :
        return{
    ...state,todos:state.todos.filter(el=>el.id!==payload)
        }
    case COMPLETE:
         return{
    ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
         }
    case ADD:
        return{
            ...state,todos:[...state.todos,payload]
        }
    case EDIT:
        return{
            ...state,todos:state.todos.map(el=>el.id===payload.id?{...el,action:payload.action}:el)
        }
 default:return state
            
        }
    }
export default reducer
        