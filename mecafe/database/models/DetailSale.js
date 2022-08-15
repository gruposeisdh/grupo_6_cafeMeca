'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailSale extends Model {
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
      this.belongsTo(models.Sale,{
        as: "sales",
        foreignKey: "sale_id"
      })   
    }
  }
 
  DetailSale.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sale_id: DataTypes.INTEGER,
    product_type_grinding: DataTypes.INTEGER,
    product_grame_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailSale',
    tableName: 'detail_sales',
    timestamps: false
  });

  return DetailSale;
};