import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Mongo } from './db'
import { Api } from './routes/api'
const app=express()

app.use(cors())
app.use(express.json())
new Mongo().connect();
dotenv.config()

app.get('/',(req,res)=>{
    res.send("HI working")
})

app.use('/api',new Api().getRouter());
app.listen(process.env.PORT,()=>{
    console.log("Listening to port"+process.env.PORT)
})