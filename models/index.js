const UserData = require('./userData') ;
const ManufacturerData = require('./manufacturerData');
const ProductDetails = require('./productDetails');
const Product = require('./product');
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

module.exports = { UserData, ManufacturerData, ProductDetails, Product,
OrderInfo, Order };