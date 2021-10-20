const express = require('express');
const {dbconnect}=require('./dbconnect');
const userRoute=require('./routes/user');
dbconnect();
const app=express();
app.use(express.json());
app.use(userRoute);
app.get('/',(req,res)=>{
  res.send("Yes Working")
});
app.listen(3000,()=>{
    console.log('listening on port 3000')
})