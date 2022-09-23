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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ending_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dashboard',
  }
);

module.exports = Dashboard;
