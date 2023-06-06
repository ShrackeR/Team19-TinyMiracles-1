const express = require('express')

// const { getannouncement } = require('../controllers/notificationController')

// controller functions
const { allevents,getevent,createevent,markAttendance, updateevent, deleteevent} = require('../controllers/eventController')

const router = express.Router()
// const cloudinary=require('cloudinary').v2;


// cloudinary.config({ 
//     cloud_name: 'ddyiex0z8', 
//     api_key: '616962189132742', 
//     api_secret: 's_7ldYcshqnuvBz7PnYj8E6S9fI',
//     secure: true
//   });

// login route
router.post('/create', createevent)
router.get('/markAttendance',markAttendance)
router.get('/get/:id',getevent)
router.get('/getall',allevents)
router.put('/update/:id',updateevent)
router.delete('/delete/:id',deleteevent)

// // signup route
// router.post('/feesupload',feesUpload)
// router.post('/register',registerUser)



// router.get('/notification', getannouncement)


module.exports = router