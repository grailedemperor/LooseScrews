const Users = require('./user') ;
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
  foreignKey: 'product_image',
  onDelete: 'CASCADE'
});

ProductDetails.BelongsTo(Products, {
  foreignKey: 'product_image',
  onDelete: 'CASCADE'
});

ProductDetails.HasOne(Products, {
  foreignKey: 'product_image',
  onDelete: 'CASCADE'
});

ManufacturerData.BelongsTo(Products, {
  foreignKey: 'product_name',
  onDelete: 'CASCADE'
});

ManufacturerData.HasMany(Products, {
  foreignKey: 'brand_or_manufacturer',
  onDelete:'CASCADE'
});


module.exports = {Users, ManufacturerData, ProductDetails, Products,
OrderInfo, Orders };
