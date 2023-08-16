import express from 'express'
import type, {Router} from 'express'
import { Todo } from './Todo'

export class Api{
    private router:Router
    constructor()
    {
        this.router=express.Router();
        this.router.use('/todo',new Todo().getRouter())
    }
    public getRouter()
    {
        return this.router;
    }
}