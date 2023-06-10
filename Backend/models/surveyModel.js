const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    eventId: {
        type: String,
        // required: true
    },
    question:{
       type:String 
    },
   userId:{
    type:String
   },
   answer:{
    type:Boolean,
    default:false
   },
    createdAt:{
        type:Date
    }
})

module.exports = mongoose.model('Survey', surveySchema);