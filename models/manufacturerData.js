const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ManufacturerData extends Model { }

ManufacturerData.init(
    {
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        brand_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        manufacturer_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
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
        // product_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'product',
        //         key: 'id'
        //     }
        // },
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