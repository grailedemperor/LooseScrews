const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model { }

Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            //primaryKey: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            //primaryKey: true,
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
            primaryKey: true,
            //autoIncrement: true,
        },
        brand_or_manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'manufacturerdata',
                key: 'brand_or_manufacturer'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;
