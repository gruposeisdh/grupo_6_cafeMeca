const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const path = require ('path');
const multer = require('multer');
const typeGrindingController = require('../controllers/typeGrindingController.js');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.get(
    '/list',
    //authMiddlewares.authMiddleware,
    //authMiddlewares.adminMiddleware,
    typeGrindingController.index
);

router.get(
    '/create',
    //authMiddlewares.authMiddleware,
    //authMiddlewares.adminMiddleware,
    typeGrindingController.create
);

router.get(
    '/edit/:id',
    //authMiddlewares.authMiddleware,
    //authMiddlewares.adminMiddleware,
    typeGrindingController.edit
);

router.post(
    '/',
    //authMiddlewares.authMiddlewarePost,
    //authMiddlewares.adminMiddleware,
    typeGrindingController.store
);

router.post(
    '/edit/:id',
    //authMiddlewares.authMiddlewarePost,
    //authMiddlewares.adminMiddleware,
    typeGrindingController.update
);


module.exports = router;