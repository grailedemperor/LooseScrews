const { Product } = require('../models');

const productdata = [
  {
    name: 'Sea World Barbie',
    category: 'toys',
    in_stock: true ,
    quantity: 10,
    product_image: '/url',
    brand_id: "1"
  },
  {
    name: 'GI Joe',
    category: 'toys',
    in_stock: true,
    quantity: 15,
    product_image: '/url',
    brand_id: '2' 
  },
  {
    name: 'Ken and Barbie',
    category: 'toys',
    in_stock: true,
    quantity: 12,
    product_image: '/url',
    brand_id: '1' 
  },
  {
    name: 'Pokemon',
    category: 'toys',
    in_stock: true,
    quantity: 20,
    product_image: '/url',
    brand_id: '2' 
  },
  {
    name: 'Frisbee',
    category: 'toys',
    in_stock: true,
    quantity: 106,
    product_image: '/url',
    brand_id: '3' 
  },
  {
    name: 'Hula Hoop',
    category: 'toys',
    in_stock: true,
    quantity: 17,
    product_image: '/url',
    brand_id: '3'
  },
  {
    name: 'Monopoly',
    category: 'games',
    in_stock: true,
    quantity: 19,
    product_image: '/url',
    brand_id: '4'
  },
  {
    name: 'Beer and Bread',
    category: 'games',
    in_stock: true,
    quantity: 10,
    product_image: '/url',
    brand_id: '5'  
  },
  {
    name: 'Risk',
    category: 'games',
    in_stock: true,
    quantity: 10,
    product_image: '/url',
    brand_id: '6'
  }
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;
