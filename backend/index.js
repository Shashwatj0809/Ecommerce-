const express=require('express');
const Mongoose = require('mongoose');
const Router=require('./Router/authRouter');
const CategoryRouter=require('./Router/categoryRoute')
const CommoditiesRoute=require('./Router/CommoditiesRoute')
const cors=require("cors");
// console.log(require('./Router/authRouter').router())
const app=express();
const PORT=6060;


Mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce")
.then(()=>console.log("Mongoose connected"))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());

// app.get("/",()=>{console.log("hi")})
app.use("/",Router);
app.use("/",CategoryRouter);
app.use("/",CommoditiesRoute);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});