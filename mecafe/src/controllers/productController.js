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
            {include: [{association : "images_products"}, {association : "brands"}]}
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
        let weightProduct = req.body.weightProduct
        let priceProduct = req.body.priceProduct
        let categoryProduct = req.body.categoryProduct
        let ratingProduct = req.body.ratingProduct
        let brandProduct = req.body.brandProduct

        let descriptionProduct = req.body.descriptionProduct

        db.Product.findAll({
            where: {
                name: nameProduct
            }
        })

            // Traemos el array con los datos, puede estar vacio .
            .then(elementoConseguido => {

                // Hacemos una comparacion con ese array, si esta vacio no se va a cumplir.
                if (elementoConseguido.length > 0) {

                    // Si el array esta vacio lo que hace es solo crear el registro en la BD de ProductGrame con el id del producto ya existente.
                    db.ProductGrame.create({
                        product_id: elementoConseguido[0].dataValues.id,
                        grames: weightProduct,
                        price: priceProduct,
                    })

                    db.ImageProduct.create({
                        path: fileproducts.imageProductNew(req.file),
                        product_id: elementoConseguido[0].dataValues.id
                    })

                    // Siempre debemos redirigir, en caso de que la condicion sea falsa o verdadera.
                    res.redirect('/product');

                } else { // En caso de que el producto no exista procede a crear todos los registros que deba.

                    db.Brand.findAll({
                        where: {
                            name: { [db.Sequelize.Op.eq]: brandProduct }
                        }
                    })

                        .then(element => {
                            return element[0].dataValues.id
                        })

                        .then(idBrand => {

                            // Creamos el Registro en la tabla Products.
                            db.Product.create({
                                name: nameProduct,
                                rating: ratingProduct,
                                description: descriptionProduct,
                                brand_id: idBrand
                            })

                                // Uso otro .then para poder traerme el objeto creado.
                                .then(element => {

                                    // Obtenemos el ultimo ID del registro creado.
                                    let ultimoId = element.dataValues.id

                                    // Creamos el registro en la tabla de ProductGrame
                                    db.ProductGrame.create({
                                        product_id: ultimoId,
                                        grames: weightProduct,
                                        price: priceProduct,
                                    })

                                    // Creamos el registro en la tabla de ImageProduct
                                    db.ImageProduct.create({
                                        path: fileproducts.imageProductNew(req.file),
                                        product_id: ultimoId
                                    })

                                })

                        })
                        .then(element => {
                            res.redirect('/product');
                        })

                }

            })

    },

    // Edita un Producto - Muestra el FORMULARIO - LISTO

    edit: (req, res) => {
        let id = req.params.id;

        db.Product.findByPk(id)
            .then(producto => {
                res.render(path.resolve(__dirname, "../views/product/edit.ejs"), { product: producto })
            })

    },



    // Edita un Producto - Lo Edita literalmente - LISTO

    update: (req, res) => {

        let id = req.params.id
        let nameProduct = req.body.nameProduct
        let weightProduct = req.body.weightProduct
        let priceProduct = req.body.priceProduct
        let categoryProduct = req.body.categoryProduct
        let descriptionProduct = req.body.descriptionProduct

        db.Product.update({
            name: nameProduct,
            rating: 0,
            description: descriptionProduct,
            brand_id: 5
        },
            {
                where: {
                    id: id
                }
            })

        res.redirect("/product/administracion");
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

