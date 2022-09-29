const { Product } = require('../models');

const productdata = [
  {
    name: 'Sea World Barbie',
    category: 'toys',
    in_stock: true ,
    quantity: 10,
    product_image: '/url',
    id:"1",
    brand: "Mattel"
  },
  {
    name: 'GI Joe',
    category: 'toys',
    in_stock: true,
    quantity: 15,
    product_image: '/url',
    id:"2",
    brand: 'Hasbro' 
  },
  {
    name: 'Ken and Barbie',
    category: 'toys',
    in_stock: true,
    quantity: 12,
    product_image: '/url',
    id:"3",
    brand: 'Mattel' 
  },
  {
    name: 'Pokemon',
    category: 'toys',
    in_stock: true,
    quantity: 20,
    product_image: '/url',
    id:"4",
    brand: 'Hasbro' 
  },
  {
    name: 'Frisbee',
    category: 'toys',
    in_stock: true,
    quantity: 106,
    product_image: '/url',
    id:"5",
    brand: 'Acme' 
  },
  {
    name: 'Hula Hoop',
    category: 'toys',
    in_stock: true,
    quantity: 17,
    product_image: '/url',
    id:"6",
    brand: 'Acme'
  },
  {
    name: 'Monopoly',
    category: 'games',
    in_stock: true,
    quantity: 19,
    product_image: '/url',
    id:"7",
    brand: 'University Games'
  },
  {
    name: 'Beer and Bread',
    category: 'games',
    in_stock: true,
    quantity: 10,
    product_image: '/url',
    id:"8",
    brand: 'Deep Print Games'  
  },
  {
    name: 'Risk',
    category: 'games',
    in_stock: true,
    quantity: 10,
    product_image: '/url',
    id:"9",
    brand: 'Barnes & Noble'
  }
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;
