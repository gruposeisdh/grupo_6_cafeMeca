module.exports = (sequelize, dataTypes) => {

    let alias = "Product"

    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        brand_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    // Declaracion de Product con sus definiciones

    const Product = sequilize.define(alias, cols, config)

    // Asociaciones

    Product.associate = (models) => {

        Product.belongsToMany( models.TypeGrinding, { // Tabla con la que se va a RELACIONAR
            as: "type_grindings",
            through: "products_type_grindings", // Tabla INTERMEDIA
            foreignKey: "product_id",
            otherKey: "type_grinding_id",
            timestamps: false
        })

        // hasmany

        Product.belongsTo (models.Brand, {
            as: "brands",
            foreignKey: "brand_id"
        })

        Product.hasMany (models.ImageProduct, {
            as: "images_products",
            foreignKey: "product_id"
        })

        Product.hasMany(models.ProductGrame,{
            as: "products_grames",
            foreignKey: "product_id"
        })

    }

    return Product;

}
