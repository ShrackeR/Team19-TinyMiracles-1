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
    community: {
        type: String,
        required: true

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
        required: true
    },
    attendants: [{
        type: String
    }],
    resources: [{
        type: String
    }]
})

//   nameSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Event', eventSchema)