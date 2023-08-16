import express from 'express'
import type,{Request,Response} from 'express'
import { Mongo } from '../../db'
export class TodoRoutes{
    public static async create(req:Request,res:Response){
        const db=new Mongo()
        const todo=await db.todoModel.create(req.body)
        await todo.save()
        return res.json({success:true,"data":req.body})
    }
    public static async display(req:Request,res:Response)
    {
        const db=new Mongo()
        const todos=await db.todoModel.find({})
        return res.json({success:true,Message:todos})
    }
    public static async delete(req:Request,res:Response)
    {
        const db=new Mongo()
        const todos=await db.todoModel.findByIdAndDelete(req.params.id)
        return res.json({success:true,Message:"Todo deleted"})
    }
    public static async update(req:Request,res:Response)
    {
        const db=new Mongo()
        const todos=await db.todoModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({success:true,Message:"Todo items Updated"})
    }
}