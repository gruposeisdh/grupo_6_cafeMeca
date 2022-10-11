const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


let userController = {
    index: (_req,res) => {
        db.User.findAll({include: [{association : "roles"}]})
        .then((allUsers) => {    
            res.render(path.resolve(__dirname, "../views/user/list.ejs"), { allUsers:allUsers })
        })
    },

    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),

    //Ver perfil usuario
    profile: (req,res) => {   
        let id= 1;    
        //let id=  req.session.user.id;
        db.User.findByPk(id).then(userEncontrado => {
            res.render(path.resolve(__dirname,"../views/user/profile.ejs"),{userProfile:userEncontrado});
        });
    },

    //actualiza datos del usuario con formulario de perfil

    update: (req,res) => {
        let id = 1;
        let name = req.body.name;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let phone = req.body.phone;
        let password = req.body.password;
        let newPassword = req.body.newPassword;
        let confirmPassword = req.body.confirmPassword;
        const ErrorMsg = {
            "email":{
                "msg": 'El email ya está siendo utilizado ',
                "value": "email"
            },

            "password": {
                "msg": "La contraseña no coincide con la actual",
                "value": "password"
            },

            "newPassword": {
                "msg": "La nueva contraseña debe ser distinta a la anterior",
                "value": "newPassword"
            },

            "confirmPassword": {
                "msg": "Las contraseñas no coinciden",
                "value": "newPassword"
            },
        }
        
        db.User.findOne({ where: { id: id } }).then((usuarioEcontrado => {

            if(usuarioEcontrado.firstName != name){
                db.User.update({
                    firstName: name
                },{
                    where: {id:id}}).then(pass => {
                        res.redirect('/user/profile');
                    })
            }

            if(usuarioEcontrado.lastName !== lastName){
                db.User.update({
                    lastName: lastName
                },{
                    where: {id:id}}).then(pass => {
                        res.redirect('/user/profile');
                    })
            }

            if(usuarioEcontrado.email !== email){
                if(email !== usuarioEcontrado.email){
                    db.User.update({
                        email: email
                    },{
                        where: {id:id}}).then(pass => {
                            res.redirect('/user/profile');
                        })
                 }   
            }

            if(usuarioEcontrado.phone !== phone){
                db.User.update({
                    phone: phone
                },{
                    where: {id:id}}).then(pass => {
                        res.redirect('/user/profile');
                    })
            }

            if(usuarioEcontrado && bcrypt.compareSync(password, usuarioEcontrado.password)){
                if(confirmPassword == newPassword){
                    db.User.update({
                        password:bcrypt.hashSync(req.body.newPassword, 10),
                    },{
                        where: {id:id}}).then(pass => {
                            res.redirect('/user/profile');
                        })
                }
            }      
        } 
        ))
    },

    //crea usuario con el formulario de registro 
    store: (req,res) => {

        let imageNewUser = function (reqFile){
            let imageProfile = ""
            if (reqFile == undefined){
                imageProfile = "default-product-image.png";
            } else {
                imageProfile = reqFile.filename;
            }
            return imageProfile;
        }

        let errors = validationResult(req); 
        
        if (!errors.isEmpty()){
            return res.render(path.resolve(__dirname,"../views/user/register.ejs"),{
                errorMessage: errors.mapped(),
                oldData: req.body
            })
        }else {
            db.User.create({
                firstName:req.body.name,
                lastName:req.body.lastName,
                email: req.body.email,
                password:bcrypt.hashSync(req.body.password, 10),
                role_id: 2,
                image:imageNewUser(req.file),
                phone: req.body.phone
            }).then(userCreado => {
                //Aqui debe hacerse login
                req.session.user = userCreado;
                req.session.errorsLogin = undefined;
                res.redirect('/user/profile');
            });
        }
    },    
       
    login:(req,res) => {
        const errors = validationResult(req);
        let pass =  req.body.password;
        let email =  req.body.email;
        let route =  req.body.route;        

        if(!errors.isEmpty()){
            req.session.errorsLogin = errors.mapped();
            return res.redirect(route);
        }

        db.User.findOne({ where: { email: email } }).then(userEncontrado => {
            if(userEncontrado && bcrypt.compareSync(pass, userEncontrado.password)){
                req.session.user = userEncontrado;
                req.session.errorsLogin = undefined;
                if(route == ''){
                    return res.redirect('/user/profile');
                }
                return res.redirect(route);
            }

            req.session.errorsLogin = {'errorPass': 'La combinación usuario / contraseña no es válida'};
            return res.redirect(route);
        });
    },

    logout:(req,res) => {
        req.session.destroy();
        return res.redirect('/');
    },

    sales: function(req,res){
        //let userId =  req.session.user.id;
        let userId= 1;

        db.Sale.findAll( {
            where: {'user_id': userId},
            include: [
                {model: db.ProductGrame, as: "products_grames",  through: { attributes: ['quantity'],}, attributes: ['price']},
            ] 
        }).then(function(sales){     
            let response = [];
            sales.forEach(sale =>{
                let total = 0;
                let totalItems = 0;

                sale.products_grames.forEach(item => {
                    total += item.price * item.DetailSale.quantity;
                    totalItems += item.DetailSale.quantity;
                });

                response.push({'id': sale.id, 'date':sale.date, 'total' : total, 'totalItems' : totalItems});
            })
            
            //res.send(response);
            res.render(path.resolve(__dirname,"../views/user/sales.ejs"),{sales:response})
        })
    }
}

module.exports = userController;
