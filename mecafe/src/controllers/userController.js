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
        let id= req.params.id;
        db.User.findByPk(id).then(userEncontrado => {
            res.render(path.resolve(__dirname,"../views/user/profile.ejs"),{userProfile:userEncontrado});
        });
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
                res.redirect('/user/profile/' + userCreado.id);
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
                return res.redirect(route);
            }

            req.session.errorsLogin = {'errorPass': 'La combinación usuario / contraseña no es válida'};
            return res.redirect(route);
        });
    },

    logout:(req,res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController;
