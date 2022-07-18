const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

let fileProduct = {

    file: 'productsDataBase.json',

    readJSON: function(){        
        return JSON.parse(fs.readFileSync(productsFilePath,'utf8'));
    },

    writeJSON: function(products){
        let productsJson = JSON.stringify(products);
        fs.writeFileSync(productsFilePath, productsJson)
    },

    saveProduct: function(product){
        let products = this.readJSON();
        /* let lastProduct = products[products.length - 1].id;
        product.id = lastProduct.id + 1; */
        products.push(product);
        this.writeJSON(products);

        return product;
    },

    updateProduct: function(product){
        let products = this.readJSON();
        let newList = products.map(function(item){
            if(item.id == product.id){ 
                product.image = item.image;               
                return item = product;
            }else{
                return item;
            }
           
        })
        this.writeJSON(newList);
    },

    deleteProduct: function(id){
        let products = this.readJSON();
        products = products.filter(function(item){
            return item.id != id;
        });
        this.writeJSON(products);
    },

    getProductById: function(id) { 
        let products = this.readJSON();
        let product = {};
        products.forEach(element => {
            if(element.id == id){
              product = element
            }
        })
        return product;        
    },

    filterProduct(atribute, value){
        let products = this.readJSON();
        return products.filter(function(item){
            return item[atribute] == value;
        });
    },

    imageProductNew (reqFile){
        let imageProduct = ""
        if (reqFile == undefined){
            imageProduct = "cafe-molido-morenita.jpg"
        } else {
            imageProduct = reqFile.filename
        }
        return imageProduct
    }
}

module.exports = fileProduct;