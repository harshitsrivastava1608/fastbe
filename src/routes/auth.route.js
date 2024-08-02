const express = require('express')
const authController = require('./../controller/auth.controller')
const router = express.Router()
router.post('/regsiter',authController.register)
module.exports=router