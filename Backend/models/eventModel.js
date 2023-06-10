const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    tag: {
        type: String,
        // required: true
    },
    attendants: [{
        type: String
    }],
    resources: [{
        type: String
    }],
    enabled: {
        type: Boolean,
        required: true,
        default: true
    },
    likes: {
        type: Number,
        default: 0
    },
    expectedAttendance: {
        type: Number,
        reqired: true,
        default: 50
    },
    question: {
        type: String
    },
    duration:{
        type:String
    },
    createdAt: {
        type: Date,
    },
    expectedAnswer: {
        type: String
    },
    survey: [{
        type: String
    }],
    positiveRes:{
        type:Number,
        default:0
    },
    
})

//   nameSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Event', eventSchema)