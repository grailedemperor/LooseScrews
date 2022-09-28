
const ManufacturerData = require('./ManufacturerData');
const ProductDetails = require('./ProductDetails');
const Product = require('./Product');
const OrderInfo = require('./orderInfo');
const Order = require('./order.js');

Order.hasMany(OrderInfo, {
  foreignKey: 'order_id',
  onDelete:'CASCADE'
});

OrderInfo.belongsTo(Order, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE'
});

OrderInfo.hasOne(Order, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE'
});

Product.hasMany(ProductDetails, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

ProductDetails.belongsTo(Product, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

ProductDetails.hasOne(Product, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

ManufacturerData.belongsTo(Product, {
  foreignKey: 'name',
  onDelete: 'CASCADE'
});

ManufacturerData.hasMany(Product, {
  foreignKey: 'name',
  onDelete:'CASCADE'
});

module.exports = { ManufacturerData, ProductDetails, Product,
OrderInfo, Order };
