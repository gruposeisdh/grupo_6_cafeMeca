'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductGrame extends Model {
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
        this.belongsToMany(models.Cart,{
            as: "carts",
            through: models.DetailCart,
            foreignKey: "product_grame_id",
            otherKey: "cart_id",
            timestamps: false
        }),
        this.belongsToMany(models.Sale,{
            as: "sales",
            through: models.DetailSale,
            foreignKey: "product_grame_id",
            otherKey: "sale_id",
            timestamps: false
        })
    }
  }
 
  ProductGrame.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: DataTypes.INTEGER,
    grames: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'ProductGrame',
    tableName: 'products_grames',
    timestamps: false
  });

  return ProductGrame;
};