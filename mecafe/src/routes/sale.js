const express = require('express')
const router = express.Router();
const saleController = require('../controllers/saleController.js')

router.post(
    '/',
    //authMiddlewares.authMiddlewarePost,
    saleController.store
);

module.exports = router;