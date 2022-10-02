const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ManufacturerData extends Model { }

ManufacturerData.init(
    {
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
<<<<<<< HEAD
            //primaryKey: true,
=======
            
        },
        brand_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
        },
        manufacturer_location: {
            type: DataTypes.STRING,
            allowNull: false,
<<<<<<< HEAD
            //primaryKey: true,
=======
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
<<<<<<< HEAD
            references: {
                model: 'product',
                key: 'category'
            }
=======
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        in_stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
<<<<<<< HEAD
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
=======
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
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
