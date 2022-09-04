const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController.js')
const authMiddlewares = require('../middlewares/authMiddlewares');
const multer = require ("multer")
const path = require ("path")

/* Creacion del LocalStorage de Multer */

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
    let saveRouteImageProduct = path.join(__dirname, "../../public/img/productos")
    cb(null, saveRouteImageProduct) 
    },

    filename: function (req, file, cb) {
    let newFileName = "productImage - " + Date.now() + path.extname(file.originalname)
    cb(null, newFileName)
    }

})

const uploadProducts = multer( { storage : storage } )

/* Fin de la creacion de Multer */

router.get('/',productController.index);

router.get(
    '/create',
    authMiddlewares.authMiddleware,
    authMiddlewares.adminMiddleware,
    productController.create
);

router.post(
    '/', 
    authMiddlewares.authMiddlewarePost,
    authMiddlewares.adminMiddleware,
    uploadProducts.single("imageProduct"),
    productController.store
);

router.get('/edit/:id',productController.edit);

router.post(
    '/edit/:id',
    authMiddlewares.authMiddlewarePost,
    authMiddlewares.adminMiddleware,
    uploadProducts.single("imageProduct"),
    productController.update
);

router.get('/detail/:id',productController.detail);

router.post(
    '/delete/:id',
    authMiddlewares.authMiddlewarePost,
    authMiddlewares.adminMiddleware,
    productController.destroy
);

router.get(
    '/administracion',
    //authMiddlewares.authMiddleware,
    //authMiddlewares.adminMiddleware,
    productController.adminProducts
);


module.exports = router;