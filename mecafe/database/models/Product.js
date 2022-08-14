'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  
    static associate(models) {
        this.belongsToMany(models.Sale,{
            as: "sales",
            through: models.DetailSale,
            foreignKey: "product_id",
            timestamps: false
        })
    }
  }
 
  Product.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
  });

  return Product;
};