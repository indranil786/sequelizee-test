const express=require('express');
const router=express.Router();
const User=require('../Models/User');
//Create a new User
router.post("/create/user",async (req,res)=>{
     try{
      const blog= await User.create(req.body);
      res.json({status:"ok",data:blog});
     }
     catch(err){
       res.json({status:err.message});
     }
      
  })
// Finding all the existing users
  router.get("/view/users",async (req,res)=>{
    try{
      const users= await User.findAll();
      res.json({status:"ok",data:users});
    }
    catch(err){
      res.json({status:err.message});
    }
  })
// Finding a specific user
  router.get("/view/users/:id",async (req,res)=>{
    try{
      const user = await User.findByPk(req.params.id);
      res.json({status:"ok",data:user});
    }
    catch(err){
    
      res.json({status:err.message});
  }
  })
  // Editing a particular field
  router.patch("/edit/users/name/",async (req,res)=>{
    try{
      const user = await User.update({firstName:req.body.firstName},{where:{lastName:"Kar"}});
      res.json({status:"ok",data:user});
    }
    catch(err){
      res.json({status:err.message});
    }
  })
// Editing all the fields of a particular user
  router.put("/edit/users/all/:id",async (req,res)=>{
    try{
      const user = await User.update({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,age:req.body.age},{where:{userid:req.params.id}});
      res.json({status:"ok",data:user});
    }
    catch(err){
      res.json({status:err.message});
    }
  })
// Deleteing a particular user.
router.delete("/delete/users/:id",async (req,res)=>{
    try{
        await User.destroy({where:{
            userid:req.params.id,
        }})
        res.json({status:"ok",data:"deleted"});
    }
    catch(err){
        res.json({status:err.message});
    }
})
  module.exports=router;