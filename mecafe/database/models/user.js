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

  const users = sequelize.define(name, cols, config);
  

  //asociasiones 
  users.associate = function(models){
    users.belongsTo(models.roles,{
      as: "roles",
      foreignKey: "roles_id"
    })
  }

  return users;
}