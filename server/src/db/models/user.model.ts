import { Schema  } from "mongoose"
import type,{TodoType} from '../../interface/User'
export const TodoSchema=new Schema<TodoType>({
    task:{
        type:String,
        required:true,
        unique:true,
    },
    completed:{
        type:Boolean,
        default:false
    }
})