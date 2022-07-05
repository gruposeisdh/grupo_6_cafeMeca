const path = require('path');

let cartController = {
    index: (_req,res) => res.render(path.resolve(__dirname,"../views/cart.ejs"))
}

module.exports = cartController;

