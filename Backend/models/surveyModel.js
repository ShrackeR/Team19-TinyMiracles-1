const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    eventId: {
        type: String,
        required: true
    },
    questions:{
       type: Schema.Types.Mixed,
        required:true
    },
    adhar:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Survey', surveySchema);