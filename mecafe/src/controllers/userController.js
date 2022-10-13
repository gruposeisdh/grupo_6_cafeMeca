const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { TIMEOUT } = require("dns");

let userController = {
  index: (_req, res) => {
    db.User.findAll({ include: [{ association: "roles" }] }).then(
      (allUsers) => {
        res.render(path.resolve(__dirname, "../views/user/list.ejs"), {
          allUsers: allUsers,
        });
      }
    );
  },

  register: (_req, res) =>
    res.render(path.resolve(__dirname, "../views/user/register.ejs")),

  //Ver perfil usuario
  profile: (req, res) => {
    console.log("entre a profile");
    let id = 1;
    //let id=  req.session.user.id;
    db.User.findByPk(id).then((userEncontrado) => {
      sleep(1000).then(() => {
        res.render(path.resolve(__dirname, "../views/user/profile.ejs"), {
          userProfile: userEncontrado,
        });
      });
    });
  },

  //actualiza datos del usuario con formulario de perfil

  update: (req, res) => {
    let id = 1;
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;

    let errors = validationResult(req);

    if (!errors.isEmpty()) { console.log(errors)
      db.User.findByPk(id).then((userEncontrado) => {
        return res.render(
          path.resolve(__dirname, "../views/user/profile.ejs"),
          {
            errorMessage: errors.mapped(),
            oldData: req.body,
            userProfile: userEncontrado,
          }
        );
      });
    } else {console.log('no hay errorres')
      db.User.findOne({ where: { id: id } }).then(() => {
        db.User.update(
          {
            firstName: name,
            lastName: lastName,
            phone: phone,
            email: email,
          },
          { where: { id: id } }
        ).then((e) => {
          console.log("aqui pase");
          res.redirect("/user/profile");
        });
      });
    }
  },

   //actualiza contraseña del usuario con formulario de perfil

  changePassword: (req, res) =>{console.log('llego aqui a pass')
    let id = 1;
    let newPassword = req.body.newPassword;

    let errors = validationResult(req);

    if (!errors.isEmpty()) { 
      db.User.findByPk(id).then((userEncontrado) => {console.log(errors)
        return res.render(
          path.resolve(__dirname, "../views/user/profile.ejs"),
          {
            errorMessage: errors.mapped(),
            oldData: req.body, 
            userProfile: userEncontrado,
          }
        );
      });
    } else {console.log('pasa bien por contraseña')
    db.User.findOne({ where: { id: id } }).then(() => {
      db.User.update(
        {
          password: bcrypt.hashSync(newPassword, 10),
        },
        { where: { id: id } }
      ).then((e) => {
        console.log("aqui pase");
        res.redirect("/user/profile");
      });
    });
  }
  },

  //crea usuario con el formulario de registro
  store: (req, res) => {
    let imageNewUser = function (reqFile) {
      let imageProfile = "";
      if (reqFile == undefined) {
        imageProfile = "default-product-image.png";
      } else {
        imageProfile = reqFile.filename;
      }
      return imageProfile;
    };

    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render(path.resolve(__dirname, "../views/user/register.ejs"), {
        errorMessage: errors.mapped(),
        oldData: req.body,
      });
    } else {
      db.User.create({
        firstName: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        role_id: 2,
        image: imageNewUser(req.file),
        phone: req.body.phone,
      }).then((userCreado) => {
        //Aqui debe hacerse login
        req.session.user = userCreado;
        req.session.errorsLogin = undefined;
        res.redirect("/user/profile");
      });
    }
  },

  login: (req, res) => {
    const errors = validationResult(req);
    let pass = req.body.password;
    let email = req.body.email;
    let route = req.body.route;

    if (!errors.isEmpty()) {
      req.session.errorsLogin = errors.mapped();
      return res.redirect(route);
    }

    db.User.findOne({ where: { email: email } }).then((userEncontrado) => {
      if (userEncontrado && bcrypt.compareSync(pass, userEncontrado.password)) {
        req.session.user = userEncontrado;
        req.session.errorsLogin = undefined;
        if (route == "") {
          return res.redirect("/user/profile");
        }
        return res.redirect(route);
      }

      req.session.errorsLogin = {
        errorPass: "La combinación usuario / contraseña no es válida",
      };
      return res.redirect(route);
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },

  sales: function (req, res) {
    //let userId =  req.session.user.id;
    let userId = 1;

    db.Sale.findAll({
      where: { user_id: userId },
      include: [
        {
          model: db.ProductGrame,
          as: "products_grames",
          through: { attributes: ["quantity"] },
          attributes: ["price"],
        },
      ],
    }).then(function (sales) {
      let response = [];
      sales.forEach((sale) => {
        let total = 0;
        let totalItems = 0;

        sale.products_grames.forEach((item) => {
          total += item.price * item.DetailSale.quantity;
          totalItems += item.DetailSale.quantity;
        });

        response.push({
          id: sale.id,
          date: sale.date,
          total: total,
          totalItems: totalItems,
        });
      });

      //res.send(response);
      res.render(path.resolve(__dirname, "../views/user/sales.ejs"), {
        sales: response,
      });
    });
  },
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = userController;
