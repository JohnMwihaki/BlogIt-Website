import express from 'express';
import { Response,Request } from 'express';
import cors from 'cors';
import dotenv from "dotenv"

import  authRoutes from './routes/auth.routes';
import  blogRoutes from './routes/blog.routes';
import uploadRoute from './routes/upload.routes'
dotenv.config()
export const app= express();
app.use(cors({
    origin:'https://blog-it-website-92p6.vercel.app/',
    credentials:true,
}))
app.use(express.json())

app.post("/",(_req:Request,res:Response)=>{
    res.send("i am running");
})

app.use("/api/auth",authRoutes);
app.use("/",blogRoutes);
app.use('/upload',uploadRoute)

const port=process.env.PORT || 5500
app.listen(port,()=>{
    console.log(`I am listening to port ${port} server`)
})