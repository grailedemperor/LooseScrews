const { ProductDetails } = require('../models');

const productdetail = 
[
    {
        brand:"Hasbro",
        price:"10.79",
        size:"OS",
        description:"yada yada yada",
        product_image:"/url",
        // product_id:"2"
    },
    {
    brand:"Mattel",
    price:"10.79",
    size:"OS",
        description:"yada yada yada",
        product_image:"/url",
        // product_id:"1"
    }
]
const seedProductDetail = () => ProductDetails.bulkCreate(productdetail);

module.exports = seedProductDetail;