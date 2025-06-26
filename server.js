const express =require('express')
const colors= require('colors')
const morgan =require('morgan')
const dotenv =require('dotenv');
const connectDB = require('./config/db');
const cors=require('cors');
dotenv.config();
connectDB();

const app=express()
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
colors.enable();

app.use("/api/v1/user",require("./routes/userRoutes"));
app.use("/api/v1/admin",require("./routes/adminRoutes"));
app.use("/api/v1/doctor",require("./routes/doctorRoutes"));

const port=process.env.PORT|| 3000;
app.listen(port,()=>{
    console.log(`server running in ${process.env.NODE_MODE} Mode on port${process.env.PORT}`.bgCyan.white
    );
    
});