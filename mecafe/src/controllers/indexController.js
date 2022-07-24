const path = require('path');

let indexController = {
    home: (_req,res) => res.render(path.resolve(__dirname,"../views/home.ejs")),
}

module.exports = indexController;