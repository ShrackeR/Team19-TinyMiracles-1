const express = require('express')
// const { getannouncement } = require('../controllers/notificationController')

// controller functions
const { loginUser,signupUser,forgotPassword,ResetPassword,viewAttended,getuser} = require('../controllers/userController')
const { getannouncement } = require('../controllers/notificationController')
// const { default: ViewAttended } = require('../../Frontend/team19/src/pages/ViewAttended')
const requireAuth2 = require("../middleware/requireAuth2");

const router = express.Router()
// const cloudinary=require('cloudinary').v2;


// cloudinary.config({ 
//     cloud_name: 'ddyiex0z8', 
//     api_key: '616962189132742', 
//     api_secret: 's_7ldYcshqnuvBz7PnYj8E6S9fI',
//     secure: true
//   });

// login route
router.post('/login', loginUser)
router.post('/signup',signupUser)
router.post('/forgotPassword',forgotPassword)
router.put('/resetPassword/:newToken',ResetPassword)
router.get('/notification', getannouncement)
router.get('/viewAttendedEvents/:id',viewAttended);

router.use(requireAuth2);

router.get('/get/:id',getuser);


// // signup route
// router.post('/feesupload',feesUpload)
// router.post('/register',registerUser)



// router.get('/notification', getannouncement)


module.exports = router