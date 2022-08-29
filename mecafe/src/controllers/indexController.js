const path = require('path');

let indexController = {

    home: (req, res) => {

        res.render(path.resolve(__dirname, "../views/home.ejs"))

    },
    
    notAuth: (req, res) => {

        res.render(path.resolve(__dirname, "../views/notAuth.ejs"))

    },

    error: (req, res) => {

        res.render(path.resolve(__dirname, "../views/partials/error404.ejs"))

    }
    
}

module.exports = indexController;