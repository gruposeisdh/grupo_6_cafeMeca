module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", 
    {
        id: {
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.STRING
        },

        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role:{

        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
    },
    {
        timestamps: true
    });

    return Usuario;
}
