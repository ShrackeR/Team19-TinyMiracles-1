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
        let e;
        try{
            const { enabled } = req.body;
            e = enabled;
        } catch (error) {
            e = false;
        }
        let eventobj;
        try {
            eventobj = await Event.findById(id);
            if (eventobj == null) {
                res.status(400).json({ "error": "Event not found" });
            }
        } catch (error) {
            res.status(400).json({ "error": "Unable to find event"});
        }
        eventobj.enabled = e;
        Event.findByIdAndUpdate(id, eventobj, { new: true }).then((event) => {
            res.status(200).json(event);
        })
        //   res.status(200).json("Success" );

    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message)
    }
};

const createevent = async (req, res) => {
    const { title, description, location, address, community, start, end, resources, tag, attendance } = req.body;
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
        const zero =0;
        const t =true;
        const upload = await Event.create({ title, description, location, address, community, start, end, tag, blank, resources, t, zero, attendance });
        console.log(upload);
        res.status(200).json({ upload });
    } catch (error) {
        console.log("Inside createevent", error.message);
        res.status(400).json({ error: error.message });
    }
}


const updateevent = async (req, res) => {
    const { title, description, location, address, community, start, end, resources, tag, } = req.body;
    const { id } = req.params;
    console.log("inside updateevent eventctrller");
    console.log(req.body);

    try {
            const eventobj = await Event.findById(id);
            if (eventobj == null) {
                console.log("obj null");
                res.status(400).json({ "error": "Event not found" });
            }
            console.log(eventobj);
            eventobj.title = title;
            eventobj.description = description;
            eventobj.location = location;
            eventobj.address = address;
            eventobj.community = community;
            eventobj.start = start;
            eventobj.end = end;
            if (typeof(resources) == "string") {
                eventobj.resources.push(resources);
            }
            eventobj.tag = tag;


            Event.findByIdAndUpdate(id, eventobj, { new: true }).then((event) => {
                res.status(200).json(event);
            })
        }  catch (error) {
        console.log(error);
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
        userobj.save().then(function (user) {
            res.status(200).json("Success");
        });


    } catch (error) {
        const { event, user } = req.body;
        eventobj.attendants.pop(user);
        await eventobj.save()
        userobj.eventsAttended.pop(event);
        await userobj.save()
        console.log(error.message)
        res.status(400).json({ error: error.message });
    }
};


const addLike = async (req, res) => {
    try {
        console.log(req.body);
        const { event } = req.params;
        const eventobj = await Event.findById(event);
        console.log(eventobj);
        eventobj.likes=eventobj.likes+1;
        await eventobj.save().then(function (user) {
            res.status(200).json("Success");
        });


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const removeLike = async (req, res) => {
    try {
        console.log(req.body);
        const { event } = req.params;
        const eventobj = await Event.findById(event);
        console.log(eventobj);
        eventobj.likes=eventobj.likes-1;
        await eventobj.save().then(function (user) {
            res.status(200).json("Success");
        });


    } catch (error) {
        res.status(400).json({ error: error.message });
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

// const unlikeEvent = async (req, res) => {

//     try {
//         console.log(req.body);
//         const { event, user } = req.body;

//         const eventObj = await Event.findByIdAndUpdate(event, {
//             $pull: { likes: user },
//         });
//         const userObj = await User.findByIdAndUpdate(user, {
//             $pull: { eventsLiked: event },
//         });

//         if (!eventObj || !userObj) {
//             return res.status(400).json({ error: 'Event or user not found' });
//         }

//         res.status(200).json('Success');
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//         console.log(error.message);
//     }
// };

// user events

module.exports = {
    allevents, getevent, createevent, markAttendance, updateevent, deleteevent, addLike, removeLike, unmarkAttendanceasync
};
