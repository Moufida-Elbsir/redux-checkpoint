
import { ADD, COMPLETE,DELETE, EDIT} from "./action-types"


export const del=(id)=>{
    return{
        type:DELETE,
        payload:id
    }
}
export const complete=(id)=>{
    return{
        type:COMPLETE,
        payload:id
    }
}
export const add=(newText)=>{
    return{
        type:ADD,
        payload:{id:Math.random(),action:newText,isDone:false}

    }
}
export const edit=(id,edited)=>{
    return{
        type:EDIT,
        payload:{id:id,action:edited}
    }
}