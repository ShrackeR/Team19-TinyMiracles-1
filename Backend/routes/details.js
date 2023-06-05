const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await User.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getdata/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await User.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})
router.delete("/deleteuser/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const updateUser = await User.findByIdAndUpdate(
        { _id: id },
        { status: "Inactive" },
        { new: true }
      );
  
      console.log(updateUser);
      res.status(201).json(updateUser);
    } catch (error) {
      res.status(422).json(error);
    }
  });
  
router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await User.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;
