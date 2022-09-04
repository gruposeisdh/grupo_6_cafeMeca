const db = require('../../database/models');
const path = require('path');
const { Cart } = require("../../database/models");

let cartController = {
    index: (_req,res) => {
        //let id =  req.session.user.id;
        let userId= 1;

        db.DetailCart.findAll(          
            {include: [
                {
                    model: db.Cart, as: "carts", where: {'user_id': userId}, attributes: []
                },
                {
                    model: db.ProductGrame, as: "products_grames", 
                    attributes: ['grames','price'], 
                    include: [{
                        model: db.Product, as: "products", attributes:['name'] , 
                        include: [{
                            model: db.Brand, as: "brands"
                        }]
                    }]
                },
                {
                    model: db.ProductTypeGrinding, as: "products_type_grindings", 
                    attributes:['type_grinding_id'], 
                    include : [{
                        model: db.TypeGrinding, as: "type_grindings" , attributes: ['name']}
                    ]
                },
            ]}        
        )
        .then((detailsCart) => { 
            res.send(detailsCart);
        })
        //res.render(path.resolve(__dirname,"../views/cart.ejs"))
    }
}

module.exports = cartController;

