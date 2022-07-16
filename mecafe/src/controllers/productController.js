const path = require('path');

const fileproducts = require('../models/product');

let productController = {
    //Muestra todos los productos
    index: (_req,res) => res.render(path.resolve(__dirname,"../views/product/list.ejs")),
    create: (_req,res) => res.render(path.resolve(__dirname,"../views/product/create.ejs")),
    edit: (req,res) => {
        let id = req.params.id;
        res.render(path.resolve(__dirname,"../views/product/edit.ejs"),{product: fileproducts.getProductById(id)})
    },
    detail: (_req,res) => {

        //enviar producto dependiendo del is que llegue de la ruta  -- usar -> fileproducts.getProductById(id);
        
        res.render(path.resolve(__dirname,"../views/product/product.ejs"))
    },

    store: (_req,res) => {

        res.redirect('/product');
    },    

    update: (_req,res) => {

        //res.redirect('/product/detail/'+id);
    },    

	destroy: (req, res) => {
		let id = req.params.id; 
		fileproducts.deleteProduct(id);

		res.redirect('/product');
	}
}

module.exports = productController;

