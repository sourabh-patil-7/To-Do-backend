
const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();

//fetch port from .env file by using following syntax if that port is busy the use 8000
const port = process.env.port || 8000;

//middleware to parse json request body
app.use(express.json());

//import router for to do api
const todoRoutes = require("./route/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes);

app.listen(port,()=>{
    console.log(`Server started successully at : port ${port}`);
});

//connection to database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`);
});



