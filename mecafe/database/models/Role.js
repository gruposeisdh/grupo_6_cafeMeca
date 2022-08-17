module.exports = (sequelize,dataTypes) => {
  let name= 'roles';
  let cols= {
    id:{
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  name:{
    type: dataTypes.STRING(45),
  },
    
  };
  let config={
      tableName: "roles",
      timestamps: false
  };

<<<<<<< HEAD
  const role = sequelize.define(name, cols, config);

  role.associate = function(models){
    role.hasMany(models.users,{
      as: "users",
      foreignKey: "role_id"
    })
  }

  return role;
=======
  const roles = sequelize.define(name, cols, config);

  roles.associate = function(models){
    roles.hasMany(models.users,{
      as: "users",
      foreignKey: "roles_id"
    })
  }

  return roles;
>>>>>>> 9453829d1d3b6f118369a24148996adb3829cb75
}