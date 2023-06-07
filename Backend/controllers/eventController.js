const e = require("express");
const Event = require("../models/eventModel");
const User = require("../models/userModel");
const Feedback = require("../models/feedbackModel");
const allevents = async (req, res) => {

    try {
        Event.find({}).then(function (events) {
            res.send(events);
        });
        //   res.status(200).json("Success" );
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message)
    }
};

const getevent = async (req, res) => {
    try {
        console.log(req.body);
        const { id } = req.params;
        Event.findById(id).then(function (events) {
            res.status(200).json(events);
        });
    } catch (error) {
        res.status(404).json({ "error": "Event not found" });
        console.log(error.message)
    }
};

const deleteevent = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        try {
            const eventobj = await Event.findById(id);
            if (eventobj == null) {
                res.status(404).json({ "error": "Event not found" });
            }
        } catch (error) {
            res.status(404).json({ "error": "Event not found" });
        }

        Event.deleteOne({ _id: id }).then(function (event) {
            res.status(200).json(event);
        });
        //   res.status(200).json("Success" );
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message)
    }
};

const createevent = async (req, res) => {
    const { title, description, location, community, start, end } = req.body;
    console.log("inside createevent eventctrller");

    try {
        // var options = {
        //     validation: {
        //         allowedExts: ["pdf"],
        //         allowedMimeTypes: [
        //             "text/plain",
        //             "application/msword",
        //             "application/x-pdf",
        //             "application/pdf",
        //         ],
        //     },
        // };
        // const imageResult = await cloudinary.uploader.upload(image, {
        //     folder: "Event",
        // });
        blank = [];

        const upload = await Event.create({ title, description, location, community, start, end, blank, blank });
        console.log(upload);
        res.status(200).json({ upload });
    } catch (error) {
        console.log("Inside createevent", error.message);
        res.status(400).json({ error: error.message });
    }
}

const createfeedback = async (req, res) => {
    const { exp,currentValue,id2,name } = req.body;
    const { id } = req.params
    console.log("inside createfeedback eventctrller");

    try {
  
        const upload = await Feedback.create({ eventid:id,experience:exp,rating:currentValue,userid:id2,username:name});
        console.log(upload);
        res.status(200).json({ upload });
    } catch (error) {
        console.log("Inside createfeedback", error.message);
        res.status(400).json({ error: error.message });
    }
}


const updateevent = async (req, res) => {
    const { title, description, location, community, start, end } = req.body;
    const { id } = req.params;
    console.log("inside updateevent eventctrller");

    try {
        try {
            const eventobj = await Event.findById(id);
            if (eventobj == null) {
                res.status(400).json({ "error": "Event not found" });
            }
            console.log(eventobj);
            eventobj.title = title;
            eventobj.description = description;
            eventobj.location = location;
            eventobj.community = community;
            eventobj.start = start;
            eventobj.end = end;

            Event.findByIdAndUpdate(id, eventobj, { new: true }).then((event) => {
                res.status(200).json(event);
            })
        } catch (error) {
            res.status(400).json({ "error": "Event not found" });
        }

    } catch (error) {
        console.log("Inside updateevent", error.message);
        res.status(400).json({ error: error.message });
    }
}
const markAttendanceusingAadhar = async (req, res) => {
    try {
        // console.log("params"+req.params);
        // console.log("query"+req.query);
        // const { event, user } = req.query;
        const {aadhar}=req.body;
        const {id}=req.params;
        // console.log("params"+event+user);
        const userobj = await User.findOne({aadhar});
        const eventobj = await Event.findById(id);
        const user = userobj._id;
        const event = eventobj._id;
        console.log(eventobj);
        eventobj.attendants.push(user);
        userobj.eventsAttended.push(event);
        await eventobj.save()
        await userobj.save().then(function (user) {
            res.status(200).json("Success");
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log("inside markattendance",error.message)
    }
};


const markAttendance = async (req, res) => {
    try {
        console.log("params"+req.params);
        console.log("query"+req.query);
        const { event, user } = req.query;
        console.log("params"+event+user);
        const eventobj = await Event.findById(event);
        const userobj = await User.findById(user);
        console.log(eventobj);
        // const check= await Event.findOne({attendants:userobj._id})
        if(eventobj.attendants.includes(user))
        {
            res.status(200).json("Already marked")
        }
        else{
        eventobj.attendants.push(user);
        userobj.eventsAttended.push(event);
        await eventobj.save()
        await userobj.save().then(function (user) {
            res.status(200).json("Success");
        });}
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message)
    }
};

const unmarkAttendanceasync = async (req, res) => {
    
    try {
        console.log(req.body);
        const { event, user } = req.body;
        
        const eventObj = await Event.findByIdAndUpdate(event, {
          $pull: { attendants: user },
        });
        const userObj = await User.findByIdAndUpdate(user, {
          $pull: { eventsAttended: event },
        });
        
        if (!eventObj || !userObj) {
          return res.status(404).json({ error: 'Event or user not found' });
        }
        
        res.status(200).json('Success');
      } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message);
      }
};

// user events

module.exports = {
    allevents, getevent, createevent, markAttendance, updateevent, deleteevent,markAttendanceusingAadhar,createfeedback
};
