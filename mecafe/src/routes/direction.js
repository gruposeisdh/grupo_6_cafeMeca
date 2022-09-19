const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const path = require ('path');
const multer = require('multer');
const directionController = require('../controllers/directionController.js');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.get(
    '/direction',/** authMiddlewares.authMiddleware, */directionController.index);


module.exports = router;