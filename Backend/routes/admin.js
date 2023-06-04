const express = require('express')

// controller functions
const { loginAdmin, signupAdmin } = require('../controllers/adminController')
// const AdminHome = require('../models/announcementSchema')

const router = express.Router()

// login route
router.post('/adminlogin', loginAdmin)

// signup route
router.post('/adminsignup', signupAdmin)


module.exports = router