const { Product } = require('../models');

const productdata = [
  {
    name: 'Sea World Barbie',
    category: 'toys',
    in_stock: 'TRUE',
    quantity: 10,
    product_image: '.jpg',
    brand_or_manufacturer: 'Mattel' 
  },
  {
    name: 'GI Joe',
    category: 'toys',
    in_stock: 'TRUE',
    quantity: 15,
    product_image: '.jpg',
    brand_or_manufacturer: 'Hasbro' 
  },
  {
    name: 'Ken and Barbie',
    category: 'toys',
    in_stock: 'TRUE',
    quantity: 12,
    product_image: '.jpg',
    brand_or_manufacturer: 'Mattel' 
  },
  {
    name: 'Pokemon',
    category: 'toys',
    in_stock: 'TRUE',
    quantity: 20,
    product_image: '.jpg',
    brand_or_manufacturer: 'Hasbro' 
  },
  {
    name: 'Frisbee',
    category: 'toys',
    in_stock: 'TRUE',
    quantity: 106,
    product_image: '.jpg',
    brand_or_manufacturer: 'Acme' 
  },
  {
    name: 'Hula Hoop',
    category: 'toys',
    in_stock: 'TRUE',
    quantity: 17,
    product_image: '.jpg',
    brand_or_manufacturer: 'Acme'
  },
  {
    name: 'Monopoly',
    category: 'games',
    in_stock: 'TRUE',
    quantity: 19,
    product_image: '.jpg',
    brand_or_manufacturer: 'University Games'
  },
  {
    name: 'Beer and Bread',
    category: 'games',
    in_stock: 'TRUE',
    quantity: 10,
    product_image: '.jpg',
    brand_or_manufacturer: 'Deep Print Games'  
  },
  {
    name: 'Risk',
    category: 'games',
    in_stock: 'TRUE',
    quantity: 10,
    product_image: '.jpg',
    brand_or_manufacturer: 'Barnes and Noble'
  },
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;
