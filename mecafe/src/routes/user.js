const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController.js')

router.get('/register',userController.register);

module.exports = router;