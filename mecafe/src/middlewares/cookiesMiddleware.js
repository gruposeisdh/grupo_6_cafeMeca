function cookiesMiddleware(req,res, next){
  next();

  if (req.cookies.remember != undefined && 
    req.session.user == undefined){
      let user = fileUser.filterUser('email',email)[0];

        if(user && bcrypt.compareSync(pass, user.password)){
            req.session.user = req.cookies.remember;
            req.session.errorsLogin = undefined;
            return res.redirect(route);
        }
  }
  req.session.user = user;
}

module.exports=cookiesMiddleware;