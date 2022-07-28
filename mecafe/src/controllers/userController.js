const path = require('path');
const fileUser = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

let userController = {
    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),
    login:(req,res) => {
        const errors = validationResult(req);
        let pass =  req.body.pass;
        let idUser =  req.body.idUser;
        let route =  req.body.route;        

        if(!errors.isEmpty()){
            req.session.errorsLogin = errors.mapped();
            console.log(errors.mapped());
            return res.redirect(route);
        }

        let user = fileUser.getUserById(idUser);

        if(user && bcrypt.compareSync(pass, user.password)){
            req.session.user = user;
            req.session.errorsLogin = undefined;
            return res.redirect(route);
        }

        req.session.errorsLogin = {'errorPass': 'La combinación usuario / contraseña no es válida'};
        return res.redirect(route);

        //res.cookie('nombre', 'valor'); como guardar cookie
        //leer cookie req.cookies.club;
    },
    logout:(_req,res) => {
        req.session.destroy();
        return res.redirect('/');
    }

}

module.exports = userController;
