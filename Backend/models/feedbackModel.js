const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    eventid: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true

    },
    username:{
        type:String,
        required:true
        
    },
    createdAt: {
        type: Date
    }
    // start: {
    //     type: Date,
    //     required: true
    // },
    // end: {
    //     type: Date,
    //     required: true
    // },
    // tag: {
    //     type: String,
    //     // required: true
    // },
    // attendants: [{
    //     type: String
    // }],
    // resources: [{
    //     type: String
    // }]
})

//   nameSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Feedback', feedbackSchema)