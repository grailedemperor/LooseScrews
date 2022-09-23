const router = require('express').Router();
const { Dashboard, Product } = require('../models');

// GET all dashboards for homepage
router.get('/', async (req, res) => {
  try {
    const dashboardData = await Dashboard.findAll({
      include: [
        {
          model: Product,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const dashboards = dashboardData.map((dashboard) =>
      dashboard.get({ plain: true })
    );

    res.render('homepage', {
      dashboards,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one dashboard
router.get('/dashboard/:id', async (req, res) => {
  try {
    const dashboardData = await Dashboard.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: [
            'id',
            'name',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const dashboard = dashboardData.get({ plain: true });
    res.render('dashboard', { dashboard });
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
