const path = require('path');

let productController = {
    index: (_req,res) => res.render(path.resolve(__dirname,"../views/product/list.ejs")),
    create: (_req,res) => res.render(path.resolve(__dirname,"../views/product/create.ejs")),
    update: (_req,res) => res.render(path.resolve(__dirname,"../views/product/update.ejs")),
    detail: (_req,res) => res.render(path.resolve(__dirname,"../views/product/product.ejs"))
}

module.exports = productController;

