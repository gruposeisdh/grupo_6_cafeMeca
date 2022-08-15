'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  
    static associate(models) {
      this.belongsTo(models.users,{
        as: "users",
        foreignKey: "user_id"
      }),
      this.belongsToMany(models.ProductGrame,{
        as: "products_grames",
        through: models.DetailCart,
        foreignKey: "cart_id",
        timestamps: false
      })
    }
  }
 
  Cart.init({
     id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: false
  });

  return Cart;
};