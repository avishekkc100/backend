import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.get('/',(req,res)=>{
        res.send("hello world")
    })
    app.on("Error",(error)=>{
        console.log('ERR:',error);
        throw error
    })
    app.listen(port,()=>{
        console.log(`App is listening on port ${port}`);
        console.log(`http://localhost:8000`);  
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed!!!", error);
    
})
