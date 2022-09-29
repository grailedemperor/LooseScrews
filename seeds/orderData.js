const { Order } = require('../models');

const order = [

    {
        id:"1",
        client_name: "Ezra Peoples"
    },
    {
        id:"2",
        client_name: "Dani Grey"
    }
];
const seedOrders = () => Order.bulkCreate(order);

module.exports = seedOrders;
