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

  const role = sequelize.define(name, cols, config);

  role.associate = function(models){
    role.hasMany(models.users,{
      as: "users",
      foreignKey: "role_id"
    })
  }

  return role;
}