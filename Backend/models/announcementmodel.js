const mongoose = require('mongoose');
const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    community: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
    }
})



module.exports = mongoose.model("Announcement", announcementSchema);

