const sequelize = require('../config/connection');
// const { ManufacturerData, Product, ProductDetails, Order, OrderInfo } = require('../models');
const seedManufacturers = require('./manufacturerData');
const seedProducts = require('./productData');
const seedProductDetail =  require('./productDetailData');
const seedOrders = require('./orderData');
const seedOrderInfo = require('./orderInfoData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProductDetail();

  await seedManufacturers();

  await seedProducts();

  await seedOrders();

  await seedOrderInfo();

  process.exit(0);
};

seedAll();
