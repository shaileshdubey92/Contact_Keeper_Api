import express from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import contactRouter from './routes/contact.js';
import cors from 'cors'
import {config} from 'dotenv'

const app = express();

config({
  path:'.env'
})  
 
app.use(bodyparser.json());
app.use(cors({
  origin:true, 
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))


mongoose 
  .connect(process.env.Mongo_URL,  
    
    { 
      dbName: "Contact_Keeper",
    }
  )
  .then(() => console.log("mongodb connected..."));

  app.use('/api',contactRouter); 

  app.get('/', (req, res) => {
    console.log('Home route accessed!');
    res.send('Welcome to the MERN_PROJECT_Contact_Keeper API!');
  });

const port = process.env.Port;
app.listen(port, () => console.log(`server is running on port ${port} `));
 