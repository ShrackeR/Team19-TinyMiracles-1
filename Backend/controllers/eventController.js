const e = require("express");
const Event = require("../models/eventModel");
const Survey = require("../models/surveyModel");
const User = require("../models/userModel");
const Feedback = require("../models/feedbackModel");


const allevents = async (req, res) => {

    try {
        Event.find({}).then(function (events) {
            events.map((event) => {
                event.createdAt = event._id.getTimestamp();
                // event.save();
            });
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
        // console.log(req.body);
        console.log(req.body);
        const { id } = req.params;
        Event.findById(id).then(function (events) {
            console.log(events._id.getTimestamp());
            res.status(200).json(events);
        });
    } catch (error) {
        res.status(404).json({ "error": "Event not found" });
        console.log(error.message)
    }
};
const getfeedback = async (req, res) => {
    try {
        console.log(req.body);
        const { id } = req.params;
        Feedback.find({ eventid: id }).then(function (events) {
            res.status(200).json(events);
        });
    } catch (error) {
        res.status(404).json({ "error": "Event not found" });
        console.log(error.message)
    }
};

const getallfeedback = async (req, res) => {
    try {
        Feedback.find({}).then(function (events) {
            events.map((event) => {
                event.createdAt = event._id.getTimestamp();
                // event.save();
            });
            res.status(200).json(events);
        });
    } catch (error) {
        res.status(404).json({ "error": "Event not found" });
        console.log(error.message)
    }
};

const getallsurvey = async (req, res) => {
    try {
        Survey.find({}).then(function (events) {
            events.map((event) => {
                event.createdAt = event._id.getTimestamp();
                // event.save();
            });
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
        try {
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
            res.status(400).json({ "error": "Unable to find event" });
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


const getRatings = async (req, res) => {
    ratings = {};
    try {
        Feedback.find({}).then(function (feedbacks) {
            feedbacks.forEach(function (feedback) {
                // console.log(feedback);
                if (Object.keys(ratings).includes(feedback.eventid)) {
                    ratings[feedback.eventid].push(parseInt(feedback.rating));
                } else {
                    ratings[feedback.eventid] = [parseInt(feedback.rating)];
                }
            }
            )
            res.status(200).json(ratings);
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message)
    }
};

const createevent = async (req, res) => {
    const { title, description, location, address, community, start, end, resources, tag, attendance, questions, duration } = req.body;
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
        const zero = 0;
        const t = true;
        const upload = await Event.create({ title, description, location, address, community, start, end, tag, blank, resources, t, zero, attendance, questions, duration });
        console.log(upload);


        res.status(200).json({ upload });


    } catch (error) {
        console.log("Inside createevent", error.message);
        res.status(400).json({ error: error.message });
    }
}

const createsurvey = async (req, res) => {
    const { title, questions } = req.body;
    console.log("inside createsurvey eventctrller");

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

        const upload = await Survey.create({ title, questions });
        console.log(upload);


        res.status(200).json({ upload });


    } catch (error) {
        console.log("Inside createsurvey", error.message);
        res.status(400).json({ error: error.message });
    }
}

const createfeedback = async (req, res) => {
    const { exp, currentValue, id2, name } = req.body;
    const { id } = req.params
    console.log("inside createfeedback eventctrller");

    try {

        const upload = await Feedback.create({ eventid: id, experience: exp, rating: currentValue, userid: id2, username: name });
        console.log(upload);
        res.status(200).json({ upload });
    } catch (error) {
        console.log("Inside createfeedback", error.message);
        res.status(400).json({ error: error.message });
    }
}


const updateevent = async (req, res) => {
    console.log(req.body);
    const { question,expectedAnswer,expectedAttendance,duration,title, description, location, address, community, start, end, resources, tag, } = req.body;
    const { id } = req.params;
    console.log("inside updateevent eventctrller");
    // console.log(req.body);

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
            eventobj.question=question;
            eventobj.expectedAnswer=expectedAnswer;
            eventobj.expectedAttendance=expectedAttendance,
            eventobj.duration=duration
            if (typeof(resources) == "string") {
                eventobj.resources.push(resources);
            }
            eventobj.tag = tag;


        Event.findByIdAndUpdate(id, eventobj, { new: true }).then((event) => {
            res.status(200).json(event);
        })
    } catch (error) {
        console.log(error);
        console.log("Inside updateevent", error.message);
        res.status(400).json({ error: error.message });
    }
}
const markAttendance = async (req, res) => {
    try {
        console.log(req.body);
        const { event, user } = req.query;
        const eventobj = await Event.findById(event);
        const userobj = await User.findById(user);
        console.log(eventobj);
        if(eventobj.attendants.includes(user)){
            res.status(400).json({ "error": "Already marked" });
        } else {
            eventobj.attendants.push(user);
            await eventobj.save()
            userobj.eventsAttended.push(event);
            userobj.save().then(function (user) {
                res.status(200).json("Success");
            });
        }


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

const markAttendanceusingAadhar = async (req, res) => {
    try {
        // console.log("params"+req.params);
        // console.log("query"+req.query);
        // const { event, user } = req.query;
        const { aadhar } = req.body;
        const { id } = req.params;
        // console.log("params"+event+user);
        const userobj = await User.findOne({ aadhar });
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



const addLike = async (req, res) => {
    try {
        console.log(req.body);
        const { event } = req.params;
        const eventobj = await Event.findById(event);
        console.log(eventobj);
        eventobj.likes = eventobj.likes + 1;
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
        eventobj.likes = eventobj.likes - 1;
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

// user events

module.exports = {
    allevents, getevent, createevent, markAttendance, updateevent, deleteevent, markAttendanceusingAadhar, createfeedback, createsurvey, getallsurvey, getfeedback, addLike, removeLike, unmarkAttendanceasync, getRatings, getallfeedback
};
