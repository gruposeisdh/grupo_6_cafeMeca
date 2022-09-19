const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


let directionController = {
    index: (_req,res) => {
        let id= 1;    
        //let id=  req.session.user.id;
        db.Direction.findAll({
            where:{user_id:id}, 
            order: [['default', 'desc']]})
        .then((directions) => {
            //res.send(directions);
            res.render(path.resolve(__dirname, "../views/user/direction/list.ejs"),{directions:directions});
        })
    },
}

module.exports = directionController;
