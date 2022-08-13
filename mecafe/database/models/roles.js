module.exports = (sequelize,dataTypes) => {
  let name= 'roles';
  let cols= {
    id:{
      type: dataTypes.INTEGER,
      primaryKey: true,
  },
  name:{
    type: dataTypes.STRING(45),
  },
    
  };
  let config={
      tableName: "roles",
      timestamps: false
  };

  const roles = sequelize.define(name, cols, config);

  roles.associate = function(models){
    roles.belongsTo(models.users,{
      as: "users",
      foreignKey: "roles_id"
    })
  }

  return user;
}