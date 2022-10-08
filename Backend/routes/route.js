const express = require('express')
const router = express.Router();
const users = require('../models/schema')
// router.get("/",(req,res)=>{
//     console.log("Connected")
//     res.end()
// })

// Post Requests

router.post("/register",async (req,res)=>{
    const {name,email,number,description}=req.body;
    
    if(!name || !email || !number || !description){
        res.status(422).json("please fill total data")
    }

    try{

        const presentuser= await users.findOne({email:email})
        console.log(presentuser)

        if(presentuser){
            res.status(422).json("This user is alreday present")
        }else{
            const adduser = new users(
                {
                    name,email,number,description
                }
            );
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser)
        }
    
    }catch(err){
        res.status(422).json(err)
    }
})

// Geting the data from the user

router.get("/getdata", async (req,res)=>{
    try{
        const userdata =await users.find()
        console.log(userdata)
        res.status(201).json(userdata)
        // res.end()

    }catch(err){
        console.log(err)
    }
})

// get user individual detail

router.get("/getuser/:id",async (req,res)=>{
    try{
        console.log(req.params)
        const {id}=req.params;
        
        const userindividual = await users.findById({_id:id})
        console.log(userindividual);
        res.status(201).json(userindividual)
    }catch(err){
        res.status(422).json(err)
    }
})

// update user data

router.patch("/update/:id",async (req,res)=>{
    try{

        const {id}= req.params
        const updateuser = await users.findByIdAndUpdate(id,req.body,{new:true})
        console.log(updateuser)
        res.status(201).json(updateuser)

    }catch(err){
        res.status(422).json(err)
    }
})

// Delete User

router.delete("/delete/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteuser = await users.findByIdAndDelete({_id:id})
        console.log(deleteuser)
        res.status(201).json(deleteuser)
    }catch(error){
        res.status(404).json(error)
    }
})

module.exports = router;