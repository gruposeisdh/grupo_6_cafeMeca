module.exports = (sequelize,dataTypes) => {
  let name= 'users';
  let cols= {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
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
    roles_id:{
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
    user.hasMany(models.roles,{
      as: "roles",
      foreignKey: "roles_id"
    })
  }

  return user;
}