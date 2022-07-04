const path = require('path');

let userController = {
    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),
    login: (_req,res) => res.sendFile(path.resolve(__dirname,"../views/partials/login.html")),
}

module.exports = userController;
