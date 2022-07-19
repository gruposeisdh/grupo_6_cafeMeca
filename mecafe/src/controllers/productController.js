const path = require('path');
const { file } = require('../models/product');
const fileproducts = require('../models/product');

let productController = {

    // Muestra todos los productos - LISTO

    index: (_req,res) => {
        let allProducts = fileproducts.readJSON()
        res.render(path.resolve(__dirname,"../views/product/list.ejs"), {allProducts : allProducts})
    },

    adminProducts: (_req, res) => {
        let allProducts = fileproducts.readJSON()
        res.render((path.resolve(__dirname,"../views/product/adminProduct.ejs")), {allProducts : allProducts})
    },

    // Crea un Producto - Muestra el FORMULARIO - LISTO

    create: (_req,res) => {
        res.render(path.resolve(__dirname,"../views/product/create.ejs"))
    },

    // Crea un Producto - Lo crea literalmente - LISTO

    store: (req,res) => {
        let nameProduct = req.body.nameProduct
        let weightProduct = req.body.weightProduct
        let priceProduct = req.body.priceProduct
        let categoryProduct = req.body.categoryProduct
        let descriptionProduct = req.body.descriptionProduct

        let newProduct = {
            id : fileproducts.generateId(),
            name: nameProduct,
            price: priceProduct,
            grams: weightProduct,
            category: categoryProduct,
            description: descriptionProduct,
            image: fileproducts.imageProductNew(req.file),
            rating: 4
        }

        fileproducts.saveProduct(newProduct)
        res.redirect('/product');
    },  

    // Edita un Producto - Muestra el FORMULARIO - LISTO

    edit: (req,res) => {
        let id = req.params.id;
        res.render(path.resolve(__dirname,"../views/product/edit.ejs"), {product: fileproducts.getProductById(id)} )
    },

    // Edita un Producto - Lo Edita literalmente - LISTO

    update: (req, res) => {

        let id = req.params.id
        let nameProduct = req.body.nameProduct
        let weightProduct = req.body.weightProduct
        let priceProduct = req.body.priceProduct
        let categoryProduct = req.body.categoryProduct
        let descriptionProduct = req.body.descriptionProduct

        let product = {
            id: parseInt(id),
            name: nameProduct,
            price: priceProduct,
            grams: weightProduct,
            category: categoryProduct,
            description: descriptionProduct,
            image: req.file == undefined ? undefined : req.file.filename,
            rating: 4
        }

        fileproducts.updateProduct(product)
        res.redirect("/product/administracion");
    },    

    detail: (_req,res) => {
        let id= _req.params.id;
        let detalleproductos=fileproducts.getProductById(id);       
        res.render(path.resolve(__dirname,"../views/product/product.ejs"), {productdetail:detalleproductos})
    },

    // Elimina un Producto - LISTO

	destroy: (req, res) => {
		let id = req.params.id; 
		fileproducts.deleteProduct(id);
		res.redirect("/product/administracion");
	}
}

module.exports = productController;

