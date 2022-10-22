const db = require('../../database/models');
const path = require('path');

let saleController = {
    index: function(req,res){
        //let userId =  req.session.user.id;
        let userId= 1;
        db.Sale.findAll({
            where: {user_id: userId},
            include: [{association: "users", association: "products"}]
            
        }).then(function(sales){           
            res.send(sales);
        })
    },
    store: function(req, res){
        //let userId =  req.session.user.id;
        let userId= 1;
    }
}

module.exports = saleController;
