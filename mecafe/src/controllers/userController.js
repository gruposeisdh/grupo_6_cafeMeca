const path = require('path');
const fileUser = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const fileUserProfile = require('../models/user');

let userController = {
    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),

    //crea un usuario
    create: (_req,res) => {
        res.render(path.resolve(__dirname,"../views/user/register.ejs"))
    },

    //crea usuario con el formulario de registro
    store: (req,res) => {
        let name = req.body.name
        let lastName = req.body.lastName
        let email = req.body.email
        let password = req.body.password

        let newUserProfile = {
            id : fileUserProfile.generateIdUser(),
            firstName: name,
            lastName: lastName,
            email: email,
            password: password,
            role:"admin",
            imageProfile: fileUserProfile.imageProductNewUser(req.file),
        }

        fileUserProfile.saveNewUser(newUserProfile)
        res.redirect('/user/register');
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
        res.locals = undefined;
        return res.redirect('/');
    }

}

module.exports = userController;
