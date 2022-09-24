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
        in_stock:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_image:{
            type: DataTypes.TEXT,
            allowNull: true,
            references: {
                model: 'productDetails',
                key: 'product_image'
            }
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        producer: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'manufacturerData',
                key: 'manufacturer'
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
