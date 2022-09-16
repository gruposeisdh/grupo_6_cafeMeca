const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


let directionController = {
    index: (_req,res) => {
       
        res.render(path.resolve(__dirname, "../views/user/direction/list.ejs"))
    },
}

module.exports = directionController;
