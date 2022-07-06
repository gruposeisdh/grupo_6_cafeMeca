const path = require('path');

let userController = {
    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),
    login: (_req,res) => res.render(path.resolve(__dirname,"../views/partials/login.ejs")),
}

module.exports = userController;
