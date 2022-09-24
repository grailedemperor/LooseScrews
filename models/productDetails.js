const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductDetails extends Model { }

ProductDetails.init(
    {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'manufacturerData',
                key: 'manufacturer'
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
       size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type_or_material: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_image: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products',
                key: 'id'
            }
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
