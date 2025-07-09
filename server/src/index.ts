import express from 'express';
import { Response,Request } from 'express';
import cors from 'cors';
import dotenv from "dotenv"

import  authRoutes from './routes/auth.routes';
import  blogRoutes from './routes/blog.routes';
dotenv.config()
export const app= express();
app.use(cors())
app.use(express.json())

app.post("/",(_req:Request,res:Response)=>{
    res.send("i am running");
})

app.use("/",authRoutes);
app.use("/",blogRoutes);

const port=process.env.PORT || 5500
app.listen(port,()=>{
    console.log(`I am listening to port ${port} server`)
})