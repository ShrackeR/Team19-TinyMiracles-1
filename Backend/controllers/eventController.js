const e = require("express");
const Event = require("../models/eventModel");
const User = require("../models/userModel");

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
        res.status(200).json({ upload });
    } catch (error) {
        console.log("Inside createevent", error.message);
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
                res.status(404).json({ "error": "Event not found" });
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
            res.status(404).json({ "error": "Event not found" });
        }

    } catch (error) {
        console.log("Inside updateevent", error.message);
        res.status(400).json({ error: error.message });
    }
}


const markAttendance = async (req, res) => {
    try {
        console.log(req.body);
        const { event, user } = req.body;
        const eventobj = await Event.findById(event);
        const userobj = await User.findById(user);
        console.log(eventobj);
        eventobj.attendants.push(user);
        await eventobj.save()
        userobj.eventsAttended.push(event);
        await userobj.save().then(function (user) {
            res.status(200).json("Success");
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message)
    }
};
// user events

module.exports = {
    allevents, getevent, createevent, markAttendance, updateevent, deleteevent
};
