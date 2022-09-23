const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductDetails extends Model { }

ProductDetails.init(
    {
        brand_or_manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'manufacturerData',
                key: 'brand_or_manufacturer'
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
       size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
                model: 'products',
                name: 'category'
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'productDetails',
    }
);

module.exports = ProductDetails;
