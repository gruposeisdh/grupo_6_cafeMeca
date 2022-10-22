const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const path = require ('path');
const multer = require('multer');
const typeGrindingController = require('../controllers/typeGrindingController.js');
const authMiddlewares = require('../middlewares/authMiddlewares');

const validateUpdateGrinding = [ 
    check("nameTypeGrinding").notEmpty().withMessage("Debes ingresar un nombre"),
]

const validateCreateGrinding = [ 
    check("nameGrinding").notEmpty().withMessage("Debes ingresar un nombre"),
]

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
    '/create',
    //authMiddlewares.authMiddlewarePost,
    //authMiddlewares.adminMiddleware,
    validateCreateGrinding,
    typeGrindingController.store
);

router.post(
    '/edit/:id',
    //authMiddlewares.authMiddlewarePost,
    //authMiddlewares.adminMiddleware,
    validateUpdateGrinding,
    typeGrindingController.update
);


module.exports = router;