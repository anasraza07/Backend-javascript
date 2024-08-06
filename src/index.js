import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();






















/*
import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import { DBName } from "./constants.js";

const app = express();

(async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);
    app.on("error", (error)=>{
      console.log(error);
      throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
      console.log(`app is listening on port ${process.env.PORT || 8000}`);
    })

  }catch(err){
    console.log('ERROR:', err)
    throw err;
  }
})();
*/
