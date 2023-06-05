const express = require('express')

// controller functions
const { loginAdmin, signupAdmin } = require('../controllers/adminController')
// const AdminHome = require('../models/announcementSchema')
const { createannouncement,deletenotification } = require('../controllers/notificationController')

const router = express.Router()
router.post('/ann', createannouncement)

// login route
router.post('/adminlogin', loginAdmin)

// signup route
router.post('/adminsignup', signupAdmin)
router.delete('/delnotification/:id', deletenotification)


module.exports = router