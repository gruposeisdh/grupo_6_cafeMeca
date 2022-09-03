const path = require('path');
const fileproducts = require('../models/product');

const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');
//Aquí tienen otra forma de llamar a los modelos creados


let productController = {

    // Muestra todos los productos - LISTO

    index: (req, res) => {

        db.Product.findAll(
            {include: [
                {model: db.TypeGrinding, as: "type_grindings",  through: { attributes: [],}},
                {model: db.ProductGrame, as: "products_grames" },
                {model: db.ImageProduct, as: "images_products" }, 
                {association : "brands"}
            ]}
        )

            .then((allProducts) => {
               
                console.log(allProducts)
                res.render(path.resolve(__dirname, "../views/product/list.ejs"), { allProducts:allProducts })
            })
    },

    adminProducts: (_req, res) => {

        db.Product.findAll()
            .then(allProducts => {
                res.render((path.resolve(__dirname, "../views/product/adminProduct.ejs")), { allProducts: allProducts })
            })

    },

    // Crea un Producto - Muestra el FORMULARIO - LISTO

    create: (_req, res) => {

        let allBrands = db.Brand.findAll()
        let typeGrindings = db.TypeGrinding.findAll()

        Promise.all([allBrands, typeGrindings])
            .then(([allBrands, typeGrindings]) => {
                res.render(path.resolve(__dirname, "../views/product/create.ejs"), { brands: allBrands, typeGrindings: typeGrindings })
            })


    },

    // Crea un Producto - Lo crea literalmente - LISTO

    store: (req, res) => {

        let nameProduct = req.body.nameProduct

        let weightProduct1 = req.body.weightProduct1
        let priceProduct1 = req.body.priceProduct1

        let weightProduct2 = req.body.weightProduct2
        let priceProduct2 = req.body.priceProduct2

        let weightProduct3 = req.body.weightProduct3
        let priceProduct3 = req.body.priceProduct3

        let idCategories = req.body.idCategories // El atibuto VALUE es el que trae los datos, si no se pone trae "ON"
        let ratingProduct = req.body.ratingProduct
        let idBrand = req.body.idBrand
        let descriptionProduct = req.body.descriptionProduct


        db.Product.create({
            name: nameProduct,
            rating: ratingProduct,
            description: descriptionProduct,
            brand_id: idBrand

        }) .then(product => {
            db.ProductGrame.create({
                product_id: product.id, // Este id viene del objeto de arriba recien creado.
                grames: weightProduct1,
                price: priceProduct1,
            })
            db.ProductGrame.create({
                product_id: product.id,
                grames: weightProduct2,
                price: priceProduct2,
            })
            db.ProductGrame.create({
                product_id: product.id,
                grames: weightProduct3,
                price: priceProduct3,
            })
            
           if (idCategories.length == 1) {

               db.ProductTypeGrinding.create({
                   product_id: product.id,
                   type_grinding_id: idCategories
               })
                
            } else {
                
                idCategories.forEach(idCategory =>{
                    db.ProductTypeGrinding.create({
                        product_id: product.id,
                        type_grinding_id: idCategory
                    })
                })
                
            }

            db.ImageProduct.create({
                path: fileproducts.imageProductNew(req.file),
                product_id: product.id,
            })           
        })

        res.redirect('/product');

    },

    // Edita un Producto - Muestra el FORMULARIO - LISTO

    edit: (req, res) => {

        let id = req.params.id;

        let pedidoProducto = db.Product.findByPk(id, {
            include: [
                {association: "type_grindings"},
                {association: "brands"},
                {association: "images_products"},
                {association: "products_grames"}
            ]
        })

        let allTProductGrame = db.ProductGrame.findAll()

        let allTypeGrindings = db.TypeGrinding.findAll()

        let allBrands = db.Brand.findAll()

        Promise.all([pedidoProducto, allBrands, allTypeGrindings, allTProductGrame])
            .then(([pedidoProducto, allBrands, allTypeGrindings, allTProductGrame]) => {
                // res.send(allTProductGrame)
                console.log(allBrands)
                res.render(path.resolve(__dirname, "../views/product/edit.ejs"), { product: pedidoProducto , allBrands: allBrands, allTypeGrindings: allTypeGrindings, allProductGrame: allTProductGrame })
            })

    },



    // Edita un Producto - Lo Edita literalmente - LISTO

    update: (req, res) => {

        let id = req.params.id
        let nameProduct = req.body.nameProduct
        let weightProduct1 = req.body.weightProduct1
        let priceProduct1 = req.body.priceProduct1
        let weightProduct2 = req.body.weightProduct2
        let priceProduct2 = req.body.priceProduct2
        let weightProduct3 = req.body.weightProduct3
        let priceProduct3 = req.body.priceProduct3
        let idCategories = req.body.idCategories // El atibuto VALUE es el que trae los datos, si no se pone trae "ON"
        let ratingProduct = req.body.ratingProduct
        let idBrand = req.body.idBrand
        let descriptionProduct = req.body.descriptionProduct

        db.ProductGrame.destroy({
            where: {
                product_id: id
            }
        })

        db.ImageProduct.destroy({
            where: {
                product_id: id
            }
        })

        db.ProductTypeGrinding.destroy({
            where: {
                product_id: id
            }
        })

        db.Product.destroy({
            where: {
                id: id
            }
        })

        db.Product.create({
            name: nameProduct,
            rating: ratingProduct,
            description: descriptionProduct,
            brand_id: idBrand

        }) .then(product => {
            db.ProductGrame.create({
                product_id: product.id, // Este id viene del objeto de arriba recien creado.
                grames: weightProduct1,
                price: priceProduct1,
            })
            db.ProductGrame.create({
                product_id: product.id,
                grames: weightProduct2,
                price: priceProduct2,
            })
            db.ProductGrame.create({
                product_id: product.id,
                grames: weightProduct3,
                price: priceProduct3,
            })
            
           if (idCategories.length == 1) {

               db.ProductTypeGrinding.create({
                   product_id: product.id,
                   type_grinding_id: idCategories
               })
                
            } else {
                
                idCategories.forEach(idCategory =>{
                    db.ProductTypeGrinding.create({
                        product_id: product.id,
                        type_grinding_id: idCategory
                    })
                })
                
            }

            db.ImageProduct.create({
                path: fileproducts.imageProductNew(req.file),
                product_id: product.id,
            })           
        })

        res.redirect("/product");
    },

    detail: (_req, res) => {
        let id = _req.params.id;
        let detalleproductos = fileproducts.getProductById(id);
        res.render(path.resolve(__dirname, "../views/product/product.ejs"), { productdetail: detalleproductos })
    },

    // Elimina un Producto - LISTO

    destroy: (req, res) => {

        let id = req.params.id;

        // Al tener una asociacion primero debemos eliminar todos los productos de la tabla que tiene asociado su FK, luego podemos eliminar el registro central

        db.ProductGrame.destroy({
            where: {
                product_id: id
            }
        })

        db.ImageProduct.destroy({
            where: {
                product_id: id
            }
        })

        db.ProductTypeGrinding.destroy({
            where: {
                product_id: id
            }
        })

        // Aca eliminamos el registro central despues de eliminar todos los registros que tenian el ID como FK

        db.Product.destroy({
            where: {
                id: id
            }
        })


        res.redirect("/product/administracion");
    }
}

module.exports = productController;

