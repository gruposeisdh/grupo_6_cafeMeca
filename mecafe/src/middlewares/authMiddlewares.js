
let authMiddlewares = {
    
    //no puedes ingresar a vistar en que necesitas no estar logeado - register
    guestMiddleware: function (req, res, next) {
        if(req.session.user){
            return res.redirect('/');
        }    
        next();
    }, 

    //proteger rutas en las que necesitas estar logeado
    authMiddleware: function(req, res, next){
        if(!req.session.user){            
            //res.render('archivo.ejs',{'alert':true});
            return res.send("necesitas estar logeado");
        }
        next();
    },

    //proteger rutas que en las que debes ser admin
    adminMiddleware: function(req, res, next){
        if(req.session.user && req.session.user.role == 'admin'){
            return res.redirect('/');
        }
        next();
    },

    //enviar user logeado
    userLogged :function(req, res, next){
        res.locals.isLogged = false;
        if(req.session.user){
            res.locals.isLogged = true;
            res.locals.name = req.session.user.name;
        }

        //errores de login - por el momento las validaciones de modal se enviaran por locals :(
        if(req.session.errorsLogin){
            res.locals.errorsLogin = req.session.errorsLogin;
        }
        next();
    }

}

module.exports = authMiddlewares;