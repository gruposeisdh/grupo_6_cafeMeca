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
    
    store: (req,res) => {        
        //let userId=  req.session.user.id;
        let userId = 1;
        let name = req.body.name;
        let street = req.body.street;
        let city = req.body.city;
        let region = req.body.region;
        let country = req.body.country;
        let address_code = req.body.address_code;
        let default_value = req.body.defaultValue == "on" ? true : false;

        console.log(default_value);
        //let id=  req.session.user.id;
        db.Direction.findAll({where: {user_id: userId}}).then(directions => {
            let total = directions.length;
            //si la nueva direccion será predeterminada y hay mas direcciones - verificar si hay otra direccion default y modificarla
            if (total > 0 && default_value) { 
                db.Direction.update({default: false},{where: {user_id: userId, default: true}})
            }
            
            if(total == 0){ // si no hay direcciones predeterminadas la primera creada siempre será default
                default_value = true;
            }

            db.Direction.create({
                name: name,
                street: street,
                city: city,
                region: region,
                country: country,
                address_code: address_code,
                default: default_value,
                user_id:userId 
            }).then(newDirection =>{
                res.redirect("/user/direction");
            })
        });
    },

    update: (req,res) => {
        //TODO validar que edito direccion perteneciente al user (no puedo editar una direccion que no es mia)
        //let userId=  req.session.user.id;
        let userId = 1;
        let id= req.body.id;
        let name = req.body.name;   
        let street = req.body.street;
        let city = req.body.city;
        let region = req.body.region;
        let country = req.body.country;
        let address_code = req.body.address_code;
        let default_value = req.body.defaultValue == "on" ? true : false;

        db.Direction.findAll({where: {user_id: userId},attribute: {[Op.not]: id}}).then(directions => {
            let total = directions.length;
            //si la direccion será predeterminada y hay mas direcciones - verificar si hay otra direccion default y modificarla
            if (total > 0 && default_value) {            
                db.Direction.update({default: false},{where: {user_id: userId, default: true }})
            }

            db.Direction.update({
                name: name,
                street: street,
                city: city,
                region: region,
                country: country,
                address_code: address_code,
                default: default_value,
            },{ where: {id: id} }).then(direction => {
                res.redirect("/user/direction");
            })
        });
    },

    delete: (req,res) => {
        //TODO validar que elimino direccion perteneciente al user (no puedo eliminar una direccion que no es mia)
        let id= req.params.id;

        db.Direction.destroy({
            where: {
                id: id
            }
        })

        res.redirect("/user/direction");
    }
}

module.exports = directionController;