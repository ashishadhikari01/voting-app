import express,{Request,Response} from "express"
import cors from 'cors'
import mongoose from "mongoose"
import {User} from "./routes/User.js"

const app=express()
const PORT=8000

app.use(express.json())
app.use(cors())
app.use('/user',User)

mongoose.connect('mongodb://localhost/votingpoll')
.then(()=>console.log('database connected'))
.catch((err)=>console.log('database connection erro',err.message))

app.get('/',(req:Request,res:Response)=>{ 
    res.json({message:'Welcome back Ashish!'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running at: http://localhost:${PORT}`)
})
