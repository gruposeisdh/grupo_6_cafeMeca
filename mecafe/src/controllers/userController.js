const path = require('path');

let userController = {
    register: (_req,res) => res.render(path.resolve(__dirname,"../views/user/register.ejs")),
}

module.exports = userController;
