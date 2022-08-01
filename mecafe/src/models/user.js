const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');

let fileUser = {
    file: 'usersDataBase.json',
    readJSON: function(){        
        return JSON.parse(fs.readFileSync(usersFilePath,'utf8'));
    },
    writeJSON: function(users){
        let usersJson = JSON.stringify(users);
        fs.writeFileSync(usersFilePath,usersJson)
    },
    saveUser: function(user){
        let users = this.readJSON();
        let lastUser = users.pop();
        user.id = lastUser.id+ 1;
        users.push(user);
        this.writeJSON(users);

        return user;
    },
    updateUser: function(user){
        let users = this.readJSON();
        let newList = users.map(function(item){
            if(item.id == user.id){ 
                user.image = item.image;               
                return item = user;
            }else{
                return item;
            }
           
        })
        this.writeJSON(newList);
    },
    deleteUser: function(id){
        let users = this.readJSON();
        users = users.filter(function(item){
            return item.id != id;
        });
        this.writeJSON(users);
    },
    getUserById: function(id){ 
        let users = this.readJSON();
        let user = {};
        users.forEach(function(item){
            if(item.id == id){
              user = item;
            }
        })
        return user;        
    },
    filterUser(atribute, value){
        let users = this.readJSON();
        return users.filter(function(item){
            return item[atribute] == value;
        });
    },

    generateIdUser(){
        let users = this.readJSON();
        let lastUser = users[users.length - 1] 
        return lastUser.id + 1;
    },

    imageProductNewUser (reqFile){
        let imageUser = ""
        if (reqFile == undefined){
            imageUser = "default-product-image.png";
        } else {
            imageUser = reqFile.filename;
        }
        return imageUser;
    },

    saveNewUser: function(user){
        let users = this.readJSON();
        users.push(user);
        this.writeJSON(users);
    
        return user;
        },
}

module.exports = fileUser;