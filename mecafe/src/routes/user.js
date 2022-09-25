const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const path = require ('path');
const multer = require('multer');
const userController = require('../controllers/userController.js');
const authMiddlewares = require('../middlewares/authMiddlewares');

const validateLogin = [
    check('email').notEmpty().withMessage('Debes completar el Mail').isEmail().withMessage('Debes completar un email válido'),
    check('password').notEmpty().withMessage('Debes completar el Password')
];


//Validaciones del formulario de registro

const validateCreateUser = [
    check('name').notEmpty().withMessage('Debes ingresar un nombre'),
    check('lastName').notEmpty().withMessage('Debes ingresar un apellido'),
    check('email').notEmpty().withMessage('Debes ingresar un Email').bail().isEmail().withMessage('Debes ingresar un formato de correo válido. example@example.com'),
    check('phone').notEmpty().withMessage('Debes ingresar un número de teléfono'),
    check('password').notEmpty().withMessage('Debes ingresar una contraseña').isLength({min:8}).withMessage('La contraseña debe tener mínimo 8 caracteres'),
    check('confirmPassword').notEmpty().withMessage('Debes confirmar la contraseña').bail().custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas escritas no coinciden, inténtalo de nuevo');
        }
          return true;
        })
];


//Storage del formulario de registro

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        let RouteImgProfile = path.join(__dirname, "../../public/img/profiles")
        cb(null,RouteImgProfile)
    },

    filename: (req, file, cb) => {
        console.log(file);
        let newFileNameProfile = "userImage - " + Date.now() + path.extname(file.originalname);
        cb(null,newFileNameProfile);
    }
})

const uploadProfile = multer({storage : storage});

router.get('/register',authMiddlewares.guestMiddleware,userController.register); 

//procesa el registro de usuario
router.post(
    '/register',
    authMiddlewares.guestMiddleware,
    uploadProfile.single("imageProfile"), 
    validateCreateUser, 
    userController.store
); 

router.get(
    '/profile',authMiddlewares.authMiddleware,userController.profile); 

router.get(
    '/sales',/** authMiddlewares.authMiddleware, */userController.sales); 

router.get(
    '/list',
    //authMiddlewares.authMiddleware, 
    //authMiddlewares.adminMiddleware,
    userController.index
); 

router.post(
    '/login',
    authMiddlewares.guestMiddleware,
    validateLogin,
    userController.login
);

router.post('/logout',authMiddlewares.authMiddlewarePost,userController.logout);


module.exports = router;