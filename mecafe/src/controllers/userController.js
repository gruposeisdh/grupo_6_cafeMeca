const path = require('path');
const fileUser = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const fileUserProfile = require('../models/user');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

let userController = {
    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),

    profile: (req,res) => {
        let id= req.params.id;
        db.User.findByPk(id).then(userEncontrado => {
            res.render(path.resolve(__dirname,"../views/user/profile.ejs"),{userProfile:userEncontrado});
        });
    },


    //crea usuario con el formulario de registro 
    store: (req,res) => {
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
            image: fileUserProfile.imageNewUser(req.file),
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

        let user = fileUser.filterUser('email',email)[0];

        if(user && bcrypt.compareSync(pass, user.password)){
            req.session.user = user;
            req.session.errorsLogin = undefined;
            return res.redirect(route);
        }

        req.session.errorsLogin = {'errorPass': 'La combinación usuario / contraseña no es válida'};
        return res.redirect(route);
    },

    logout:(req,res) => {
        req.session.destroy();
        return res.redirect('/');
    }

}

module.exports = userController;
