const express = require('express')

// controller functions
const { loginAdmin, signupAdmin } = require('../controllers/adminController')
// const AdminHome = require('../models/announcementSchema')
const { createannouncement,deletenotification } = require('../controllers/notificationController')
const requireAuth2 = require("../middleware/requireAuth2");

const router = express.Router()

// login route
router.post('/adminlogin', loginAdmin)

// signup route
router.post('/adminsignup', signupAdmin)

router.use(requireAuth2);

router.post('/ann', createannouncement)
router.delete('/delnotification/:id', deletenotification)


module.exports = router