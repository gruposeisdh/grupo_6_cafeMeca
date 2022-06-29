const path = require('path');

let cartController = {
    index: (_req,res) => res.sendFile(path.resolve(__dirname,"../views/cart.html"))
}

module.exports = cartController;

