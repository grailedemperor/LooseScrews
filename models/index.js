
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

// Product.hasMany(ProductDetails, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE'
// });

// ProductDetails.belongsTo(Product, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE'
// });

// ProductDetails.hasOne(Product, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE'
// });

ManufacturerData.belongsTo(Product, {
  foreignKey: 'brand',
  onDelete: 'CASCADE'
});

ManufacturerData.hasMany(Product, {
  foreignKey: 'brand',
  onDelete:'CASCADE'
});

module.exports = { ManufacturerData, ProductDetails, Product,
OrderInfo, Order };
