const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const userController = require('../controllers/userController.js');
const authMiddlewares = require('../middlewares/authMiddlewares');
const path = require ('path');
const multer = require('multer');


const validateLogin = [
    check('email').notEmpty().withMessage('Debes completar el Mail').isEmail().withMessage('Debes completar un email válido'),
    check('password').notEmpty().withMessage('Debes completar el Password')
];

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


router.get('/register',userController.register);
router.post('/register',uploadProfile.single("imageProfile"), userController.store);
router.post('/login',validateLogin,userController.login);
router.post('/logout',userController.logout);


module.exports = router;