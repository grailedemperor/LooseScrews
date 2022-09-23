const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dashboard extends Model {}

Dashboard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    retail_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orders: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },   
    customers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dashboard',
  }
);

module.exports = Dashboard;
