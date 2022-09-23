const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model { }

Products.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        in_stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            references: {
                model: 'productdetails',
                key: 'in_stock'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_image:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        brand_or_manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'manufacturerData',
                key: 'brand_or_manufacturer'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'products',
    }
);

module.exports = Products;
