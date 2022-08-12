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
        let errors = validationResult(req); 
        
        if (!errors.isEmpty()){
            return res.render(path.resolve(__dirname,"../views/user/register.ejs"),{
                errorMessage: errors.mapped(),
                oldData: req.body
            }) 

        }else {
        let name = req.body.name
        let lastName = req.body.lastName
        let email = req.body.email
        let password = bcrypt.hashSync(req.body.password, 10)
     
            let newUserProfile = {
                id : fileUserProfile.generateIdUser(),
                firstName: name,
                lastName: lastName,
                email: email,
                password: password,
                role:"cliente",
                imageProfile: fileUserProfile.imageProductNewUser(req.file),
            }
    
            fileUserProfile.saveNewUser(newUserProfile)
            return res.redirect('/user/register');
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

         //Validación de Cookies
         console.log(req.body.remember);
         if (req.body.remember != undefined){
            res.cookie('remember', 
            user.email, {maxAge: 60000})
            
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
