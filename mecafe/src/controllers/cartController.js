const path = require('path');

let cartController = {
    index: (_req,res) => res.render(path.resolve(__dirname,"../views/cart.ejs")),
    indexN: (_req,res) => res.render(path.resolve(__dirname,"../views/cartNew.ejs"))
}

module.exports = cartController;

