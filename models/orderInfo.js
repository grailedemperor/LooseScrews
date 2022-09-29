const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderInfo extends Model {}

OrderInfo.init(
  { order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'order',
        key: 'id',
      },
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_location: {
      type: DataTypes.STRING,
    },
    ordered_on: {
      type: DataTypes.DATE,
      allowNull: true,
      // defaultValue: DataTypes.NOW,
    },
    shipped_by: {
      type: DataTypes.DATE,
      allowNull: true,
      // defaultValue: DataTypes.NOW,
    },
    delivered_by: {
      type: DataTypes.DATE,
      allowNull: true,
      // defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderinfo',
  }
);

module.exports = OrderInfo;