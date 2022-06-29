const express = require('express')
const router = express.Router();
const indexController = require('../controllers/indexController.js')

router.get('/',indexController.home);
router.get('/header',indexController.header);
router.get('/footer',indexController.footer);

module.exports = router;