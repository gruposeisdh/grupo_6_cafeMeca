const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController.js')

router.get('/',productController.index);
router.get('/create',productController.create);
router.post('/',productController.store);
router.get('/edit/:id',productController.edit);
router.put('/edit/:id',productController.update);
router.get('/detail/:id',productController.detail);
router.delete('/delete/:id', productController.destroy); 

module.exports = router;