'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  
    static associate(models) {
      this.belongsTo(models.users,{
        as: "users",
        foreignKey: "user_id"
      })
    }
  }
 
  Sale.init({
    user_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales',
    timestamps: false
  });

  return Sale;
};