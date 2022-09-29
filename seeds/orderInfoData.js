const { OrderInfo } = require('../models');

const orderInfo = [

    {
        order_id:"1",
        order_status:"in_processing",
        client_name: "Ezra Peoples",
        delivery_location:"MD",
        ordered_on: null,
        shipped_by: null,
        delivered_by: null
    },
    {
    order_id:"2",
    order_status:"recieved",
    client_name: "Dani Grey",
    delivery_location:"FL",
    ordered_on: null,
    shipped_by: null,
        delivered_by: null
    }
];
const seedOrderInfo = () => OrderInfo.bulkCreate(orderInfo);

module.exports = seedOrderInfo;
