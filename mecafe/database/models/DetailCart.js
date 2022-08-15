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
      this.belongsTo(models.ProductGrame,{
          as: "products_grames",
          foreignKey: "product_grame_id"
      }),
      this.belongsTo(models.Cart,{
          as: "carts",
          foreignKey: "cart_id"
      }),
      this.belongsTo(models.ProductTypeGrinding,{
        as: "products_type_grindings",
        foreignKey: "product_type_grinding"
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
    product_type_grinding: DataTypes.INTEGER,
    product_grame_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailCart',
    tableName: 'detail_cart',
    timestamps: false
  });

  return DetailCart;
};