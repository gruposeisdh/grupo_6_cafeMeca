const db = require('../../database/models');
const path = require('path');

let typeGrindingController = {
    //listado de moliendas
    index: function(req,res){
        res.render(path.resolve(__dirname,"../views/typeGrinding/list.ejs"))
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
       
    }
}

module.exports = typeGrindingController;
