import express from 'express'
import { TodoRoutes } from './route'
import { Router } from 'express'

export class Todo{
    private router:Router;
    constructor()
    {
        this.router=express.Router();
        this.router.post('/create',TodoRoutes.create)
        this.router.get('/display',TodoRoutes.display)
        this.router.put('/update/:id',TodoRoutes.update)
        this.router.delete('/delete/:id',TodoRoutes.delete)
    }
    public getRouter()
    {
        return this.router;
    }
}