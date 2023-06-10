const express = require("express");
const router = express.Router();
const json2csv = require('json2csv');
const fs = require('fs');
const User = require("../models/userModel");


const requireAuth2 = require("../middleware/requireAuth2");

router.use(requireAuth2);

router.get("/download",async(req,res)=>{
  User.find({}, (err, data) => {
    if (err) throw err;

    const csvData = json2csv.parse(data);
    const filePath = './data.csv';

    fs.writeFile(filePath, csvData, (err) => {
      if (err) throw err;

      res.download(filePath, 'data.csv', (err) => {
        if (err) throw err;

        fs.unlinkSync(filePath);
        });
      });
    });
})
router.get("/getdata",async(req,res)=>{
    try {
        User.find({}).then(function (events) {
          events.map((event) => {
              event.createdAt = event._id.getTimestamp();
              console.log(event.createdAt);
              // event.save();
          });
          console.log(events);
          res.send(events);
      });
        
        // console.log(userdata);
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
