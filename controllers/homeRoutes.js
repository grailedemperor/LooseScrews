const router = require('express').Router();
const { Order, Product, ProductDetails } = require('../models');
const withAuth = require('../utils/auth');

// GET all dashboards for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const orderData = await Order.findAll({
      include: [
        {
          model: Product, ProductDetails,
          attributes: ['name', 'description'],
        },
      ],
    });

    const orders = orderData.map((order) =>
      order.get({ plain: true })
    );

    res.render('homepage.handlebars', {
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
router.get('/order/:id', withAuth, async (req, res) => {
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
            'producer'
          ],
        },
      ],
    });

    const dashboard = dashboardData.get({ plain: true });
    res.render('order', { dashboard });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one product
router.get('/product/:id', withAuth, async (req, res) => {
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