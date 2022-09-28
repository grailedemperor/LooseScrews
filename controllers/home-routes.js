const sequelize = require('../config/connection');
const router = require('express').Router();
const { Orders, OrderInfo } = require('../models');

// GET all dashboards for homepage
router.get('/', async (req, res) => {
  try {
    const orderData = await Orders.findAll({
      include: [
        {
          model: Products,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const orders = orderData.map((order) =>
      order.get({ plain: true })
    );

    res.render('homepage', {
      orders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// GET one dashboard
router.get('/order/:id', async (req, res) => {
  try {
    const dashboardData = await Order.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: [
            'name',
            'category',
            'in_stock',
            'quantity',
            'product_image',
            'product_id',
            'brand_or_manufacturer'
          ],
        },
      ],
    });

    const order = orderData.get({ plain: true });
    res.render('order', { order });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one product
router.get('/product/:id', async (req, res) => {
  try {
    const dbProductData = await Product.findByPk(req.params.id);

    const product = dbProductData.get({ plain: true });
    res.render('product', { product });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
