const express = require('express')
const router = express.Router();
const indexController = require('../controllers/indexController.js')

router.get('/',indexController.home);
router.get('/notAuth', indexController.notAuth);
router.get('/404', indexController.error);

module.exports = router;