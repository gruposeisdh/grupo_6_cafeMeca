const path = require('path');
const fileUser = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

let userController = {
    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),
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
