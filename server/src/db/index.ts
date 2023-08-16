import mongoose from "mongoose";
import { TodoSchema } from "./models/user.model"
import { TodoType } from "../interface/User";

export class Mongo{
    public todoModel:mongoose.Model<TodoType>;
    constructor()
    {
        this.todoModel=mongoose.model("todo",TodoSchema)
    }
    public async connect()
    {
        try{
            await mongoose.connect("mongodb://127.0.0.1:27017/avi")
            console.log("Connected to database")
        }
        catch(err)
        {
            console.log("Failed to connect"+err)
        }
    }
}
