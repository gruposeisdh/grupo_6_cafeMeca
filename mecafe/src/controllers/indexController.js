const path = require('path');

let indexController = {
    home: (_req,res) => res.render(path.resolve(__dirname,"../views/home.ejs")),

    header: (_req,res) => res.render(path.resolve(__dirname,"../views/partials/header.ejs")),

    footer: (_req,res) => res.render(path.resolve(__dirname,"../views/partials/footer.ejs")),
}

module.exports = indexController;