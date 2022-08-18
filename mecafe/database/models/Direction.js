'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  
    static associate(models) {
       this.belongsTo(models.User,{
        as: "users",
        foreignKey: "user_id"
      })
    }
  }
 
  Direction.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street:{
        allowNull: false,
        type: DataTypes.STRING(250)
    },
    city: DataTypes.STRING(250),
    region: DataTypes.STRING(250),
    address_code: DataTypes.STRING(250),
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Direction',
    tableName: 'directions',
    timestamps: false
  });

  return Direction;
};