module.exports = (sequelize,dataTypes) => {
  let name= 'users';
  let cols= {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName:{
      type: dataTypes.STRING(45),
    },
    lastName:{
      type: dataTypes.STRING(45),
    },
    email:{
      type: dataTypes.STRING(45),
    },
    password:{
      type: dataTypes.STRING(250),
    },
    role_id:{
      type: dataTypes.INTEGER,
    },
    image:{
      type: dataTypes.STRING(250),
    },
  };
  let config={
      tableName: "users",
      timestamps: false
  };

  const user = sequelize.define(name, cols, config);
  
  user.associate = function(models){
    user.belongsTo(models.roles,{
      as: "roles",
      foreignKey: "role_id"
    }),
    user.hasMany(models.Sale,{
      as: "sales",
      foreignKey: "user_id"
    }),
    user.hasOne(models.Cart,{
      as: "carts",
      foreignKey: "user_id"
    }),
    user.hasOne(models.Direction,{
      as: "directions",
      foreignKey: "user_id"
    })
  }

  return user;
}