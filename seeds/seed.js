// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

<<<<<<< HEAD
const userData = require('./userData.json');
const productData = require('./productData.js');
=======
// const userData = require('./userData.json');
// const productData = require('./productData.js');
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

<<<<<<< HEAD
  for (const product of productData) {
    await Product.create({
      ...product,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
=======
//   for (const product of productData) {
//     await Product.create({
//       ...product,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54

//   process.exit(0);
// };

// seedDatabase();
