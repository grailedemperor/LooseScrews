const sequelize = require('../config/connection');
const { User, Project } = require('../models');
const seedDashboard = require('./dashboardData');
const seedProduct = require('./productData');
const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDashboard();

  await seedProduct();

  process.exit(0);
};

seedAll();
