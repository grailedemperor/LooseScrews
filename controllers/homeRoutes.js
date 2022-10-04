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
          attributes: ['name', 'description', 'size', 'quantity','category'],
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

module.exports = router;
