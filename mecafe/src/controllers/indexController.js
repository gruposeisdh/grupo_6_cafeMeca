const path = require('path');

let indexController = {
    home: (_req,res) => res.sendFile(path.resolve(__dirname,"../views/home.html")),

    header: (_req,res) => res.sendFile(path.resolve(__dirname,"../views/partials/header.html")),

    footer: (_req,res) => res.sendFile(path.resolve(__dirname,"../views/partials/footer.html")),
}

module.exports = indexController;