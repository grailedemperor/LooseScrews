const UserData = require('./userData') ;
const ManufacturerData = require('./ManufacturerData');
const ProductDetails = require('./ProductDetails');
const Products = require('./Products');
const OrderInfo = require('./orderInfo');
const Orders = require('./orders.js');;

Orders.hasMany(OrderInfo, {
  foreignKey: 'order_id',
  onDelete:'CASCADE'
});

OrderInfo.BelongsTo(Orders, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE'
});

OrderInfo.HasOne(Orders, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE'
});

Products.HasMany(ProductDetails, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

ProductDetails.BelongsTo(Products, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

ProductDetails.HasOne(Products, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

ManufacturerData.BelongsTo(Products, {
  foreignKey: ' name',
  onDelete: 'CASCADE'
});

ManufacturerData.HasMany(Products, {
  foreignKey: ' name',
  onDelete:'CASCADE'
});

module.exports = { UserData, ManufacturerData, ProductDetails, Products,
OrderInfo, Orders };