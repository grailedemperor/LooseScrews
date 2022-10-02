const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ManufacturerData extends Model { }

ManufacturerData.init(
    {
        brand_or_manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
            //primaryKey: true,
        },
        manufacturer_location: {
            type: DataTypes.STRING,
            allowNull: false,
            //primaryKey: true,
        },
        type_or_material: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'product',
                key: 'category'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        in_stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            references: {
                model: 'productdetails',
                key: 'in_stock'
            }
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'product',
                key: 'name'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'manufacturerdata',
    }
);

module.exports = ManufacturerData;
