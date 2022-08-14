'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  
    static associate(models) {
        this.belongsTo(models.Product,{
            as: "products",
            foreignKey: "product_id"
        }),
        this.belongsTo(models.Cart,{
            as: "carts",
            foreignKey: "cart_id"
        })
    }
  }
 
  DetailCart.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailCart',
    tableName: 'detail_cart',
    timestamps: false
  });

  return DetailCart;
};