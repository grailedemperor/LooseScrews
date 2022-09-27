const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ManufacturerData extends Model { }

ManufacturerData.init(
    {
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        manufacturer_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        industry: {
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
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'products',
                key: 'name'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'manufacturerData',
    }
);

module.exports = ManufacturerData;
