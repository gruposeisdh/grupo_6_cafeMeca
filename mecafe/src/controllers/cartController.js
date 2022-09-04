const db = require('../../database/models');
const path = require('path');
const { Cart } = require("../../database/models");

let cartController = {
    index: (_req,res) => {
        //let id =  req.session.user.id;
        let id= 1;
       
        Cart.findOne(
            {include: [{association : "users"}]},
            {where: {'user_id' : id} }).then((cart) => { 
            res.send(cart);
        })

        //res.render(path.resolve(__dirname,"../views/cart.ejs"))
    }
}

module.exports = cartController;

