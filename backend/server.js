import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
const PORT = 5000
app.get("/" , (req ,res)=>{
    res.send("Api is working")
})

app.listen(PORT , ()=>{
    console.log("Server is running on port 5000")
})