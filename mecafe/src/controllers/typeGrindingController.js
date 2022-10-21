const db = require('../../database/models');
const path = require('path');

let typeGrindingController = {
    //listado de moliendas
    index: function(req,res){
        db.TypeGrinding.findAll({ attributes: ['id', 'name'] }).then(
            (typeGrinding) => {
                res.render(path.resolve(__dirname,"../views/typeGrinding/list.ejs"), {
                    typeGrinding: typeGrinding
                });
            }
        );
        
    },
    // muestra vista creacion
    create: function(req,res){
        res.render(path.resolve(__dirname,"../views/typeGrinding/create.ejs"))
    },
    //el que crea el registro
    store: function(req,res){

    },
    //muestra vista edicion
    edit: function(req,res){
        res.render(path.resolve(__dirname,"../views/typeGrinding/edit.ejs"))
    },
    //actualiza registro
    update: function(req,res){
        let id = req.params.id;
        let nameGrinding = req.body.nameTypeGrinding;

        db.TypeGrinding.findByPk(id)
        .then(typeGrindings => {

            if (typeGrindings){
                res.render(path.resolve(__dirname,"../views/typeGrinding/list.ejs"), {
                    typeGrindings: typeGrindings
                });

                db.TypeGrinding.update({
                    name: nameGrinding
                },{
                    where: {
                        id: typeGrindings.id
                    } 
                }).then(() => {
                    res.redirect("/type-grinding/list")
                })
            } else {
                    res.redirect("/type-grinding/edit/:id")
              }
            
        })

        

          
    }
}

module.exports = typeGrindingController;
