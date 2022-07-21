const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cartController.js')

router.get('/',cartController.index);
router.get('/new',cartController.indexN);

module.exports = router;