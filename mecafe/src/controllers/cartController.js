const db = require('../../database/models');
const path = require('path');
const { Cart } = require("../../database/models");

let cartController = {
    index: (_req,res) => {
        //let userId =  req.session.user.id;
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
                        include: [
                            {model: db.Brand, as: "brands"},
                            {model: db.ImageProduct, as: "images_products", attributes: ['path']}
                        ]
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
            //res.send(detailsCart);
            res.render(path.resolve(__dirname,"../views/cart.ejs"),{detailsCart:detailsCart})
        });
    },

    update: (req, res) => {
        //let userId =  req.session.user.id;
        let userId= 1;

        let detailsCart = Object.entries(req.body);

        detailsCart.forEach((item) => {
            //envío como name detailCart_id siendo id el id de detailCart
            let idDetailCart = item[0].split('_')[1]; //(no es lo mas bonito pero no se me ocurrió nada mas)
            let quantity = item[1];           

            if(quantity > 0){ //actualizar
                db.DetailCart.update({
                    quantity: quantity,
                },{where : {id: idDetailCart}})
            }else{ //eliminar
                db.DetailCart.destroy({
                    where: {
                        id: idDetailCart
                    }
                })
            }
        })

        //hago esperar 1 sengudo para que se termine de actualizar el carrito (obvio falta un await porque esto no es bonito :c)
        sleep(1000).then(() => { 
            res.redirect('/cart'); 
        });       
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = cartController;

