import express from "express"
import cors from "cors"
import companyRoutes from './routes/companyRoutes.js';
import connectDB from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express()
connectDB()


app.use(cors())
app.use(express.json())
const PORT = 5000
app.get("/" , (req ,res)=>{
    res.send("Api is working")
})

app.use('/api/companies', companyRoutes);

app.listen(PORT , ()=>{
    console.log("Server is running on port 5000")
})