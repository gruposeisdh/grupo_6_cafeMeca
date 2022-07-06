const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController.js')

router.get('/',productController.index);
router.get('/create',productController.create);
router.get('/update',productController.update);
router.get('/detail',productController.detail);

module.exports = router;