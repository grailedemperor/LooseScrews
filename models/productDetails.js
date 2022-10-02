const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductDetails extends Model { }

ProductDetails.init(
    {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
       size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
<<<<<<< HEAD
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        in_stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            primaryKey: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'product',
                name: 'category'
            }
        },
=======
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_image: {
            type: DataTypes.TEXT,
            allowNull: false,
            // primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'productdetails',
    }
);

module.exports = ProductDetails;
