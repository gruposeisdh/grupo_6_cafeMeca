const db = require('../../database/models');
const path = require('path');

let saleController = {
    index: function(req,res){
        db.Sale.findAll({
            include: [{association: "users", association: "products"}]
            
        }).then(function(sales){           
            res.send(sales);
        })
    }
}

module.exports = saleController;
