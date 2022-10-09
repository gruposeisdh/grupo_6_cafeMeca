const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cartController.js');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.get(
    '/', 
    //authMiddlewares.authMiddleware,
    cartController.index
);
router.post(
    '/', 
    //authMiddlewares.authMiddlewarePost,
    cartController.update
);
router.post(
    '/addProduct', 
    //authMiddlewares.authMiddlewarePost,
    cartController.addProduct
);


module.exports = router;