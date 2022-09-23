const Dashboard = require('./Dashboard');
const Product = require('./Product');

Dashboard.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Dashboard, {
  foreignKey: 'user_id'
});

module.exports = { Dashboard, Product };
