const { Product } = require('../models');

const productdata = [
  {
    name: 'Sea World Barbie',
    category: 'toys',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 10,
    product_image: '.jpg',
    brand_or_manufacturer: 'Mattel' 
=======
    in_stock: true ,
    quantity: 10,
    product_image: '/url',
    brand_id: "1"
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'GI Joe',
    category: 'toys',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 15,
    product_image: '.jpg',
    brand_or_manufacturer: 'Hasbro' 
=======
    in_stock: true,
    quantity: 15,
    product_image: '/url',
    brand_id: '2' 
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'Ken and Barbie',
    category: 'toys',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 12,
    product_image: '.jpg',
    brand_or_manufacturer: 'Mattel' 
=======
    in_stock: true,
    quantity: 12,
    product_image: '/url',
    brand_id: '1' 
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'Pokemon',
    category: 'toys',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 20,
    product_image: '.jpg',
    brand_or_manufacturer: 'Hasbro' 
=======
    in_stock: true,
    quantity: 20,
    product_image: '/url',
    brand_id: '2' 
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'Frisbee',
    category: 'toys',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 106,
    product_image: '.jpg',
    brand_or_manufacturer: 'Acme' 
=======
    in_stock: true,
    quantity: 106,
    product_image: '/url',
    brand_id: '3' 
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'Hula Hoop',
    category: 'toys',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 17,
    product_image: '.jpg',
    brand_or_manufacturer: 'Acme'
=======
    in_stock: true,
    quantity: 17,
    product_image: '/url',
    brand_id: '3'
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'Monopoly',
    category: 'games',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 19,
    product_image: '.jpg',
    brand_or_manufacturer: 'University Games'
=======
    in_stock: true,
    quantity: 19,
    product_image: '/url',
    brand_id: '4'
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'Beer and Bread',
    category: 'games',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 10,
    product_image: '.jpg',
    brand_or_manufacturer: 'Deep Print Games'  
=======
    in_stock: true,
    quantity: 10,
    product_image: '/url',
    brand_id: '5'  
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
  },
  {
    name: 'Risk',
    category: 'games',
<<<<<<< HEAD
    in_stock: 'TRUE',
    quantity: 10,
    product_image: '.jpg',
    brand_or_manufacturer: 'Barnes and Noble'
  },
=======
    in_stock: true,
    quantity: 10,
    product_image: '/url',
    brand_id: '6'
  }
>>>>>>> 6cc3221ac8d997c735f8cd197758400e516a5f54
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;
