const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const userController = require('../controllers/userController.js')

const validateLogin = [
    check('mail').notEmpty().withMessage('Debes completar el Mail').isEmail().withMessage('Debes completar un email válido'),
    check('password').notEmpty().withMessage('Debes completar el Password')
];

router.get('/register',userController.register);
router.post('/login',validateLogin,userController.login);
router.post('/logout',userController.logout);

module.exports = router;