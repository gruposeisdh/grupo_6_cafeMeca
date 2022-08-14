const db = require('../../database/models');
const path = require('path');

let saleController = {
    index: function(req,res){
        db.Sale.findAll().then(function(sales){
            res.render("pepe");
        })

    }

}

module.exports = saleController;
