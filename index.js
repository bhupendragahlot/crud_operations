import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();

app.use(bodyParser.json()); 
dotenv.config();
// const PORT = process.env.PORT || 8080;  
// const MONGOURL = process.env.MONGO_URL;
const PORT = 3000; 

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/user", route);

// app.get('/',(req,res)=>{
//   res.send("hello world")
// })
// app.listen(PORT)
