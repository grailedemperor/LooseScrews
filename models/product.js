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
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_image:{
            type: DataTypes.TEXT,
            allowNull: true,
            // references: {
            //     model: 'productDetails',
            //     key: 'product_image'
            // }
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        brand:{
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model: "manufacturerdata",
                key:"manufacturer"
            }
        }
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
