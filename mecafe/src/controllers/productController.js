const path = require('path');

let productController = {
    index: (_req,res) => res.render(path.resolve(__dirname,"../views/product/list.ejs")),
    create: (_req,res) => res.sendFile(path.resolve(__dirname,"../views/product/create.html")),
    detail: (_req,res) => res.sendFile(path.resolve(__dirname,"../views/product/product.html"))
}

module.exports = productController;

