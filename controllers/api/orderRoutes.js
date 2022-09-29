const router = require('express').Router();
const { Order, OrderInfo } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        // Get all order and JOIN with order info
        const orderData = await Order.findAll({
            include: [
                {
                    model: OrderInfo,
                    attributes: ['order_status', 'client_name', 'delivery_location','ordered_on', 'shipped_by','delivered_by'],
                },
            ],
        });

        const order = orderData.map((order) => order.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage.handlebars', {
            ...order,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        // Get one order and JOIN with order info
        const orderData = await Order.findbyPk(req.params.id,{
            include: [
                {
                    model: OrderInfo,
                    attributes: ['order_status', 'client_name', 'delivery_location','ordered_on', 'shipped_by','delivered_by'],
                },
            ],
        });

        const order = orderData.map((order) => order.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage.handlebars', {
            ...order,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const newOrder = await Order.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newOrder);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const orderData = await Order.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
        include: [
            {
                model: OrderInfo,
                attributes: ['order_status', 'client_name', 'delivery_location','ordered_on', 'shipped_by','delivered_by'],
            },
        ],
      });
  
      if (!orderData) {
        res.status(404).json({ message: 'No order found with this id!' });
        return;
      }
  
      res.status(200).json(orderData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.put('/:id', withAuth, async (req, res) => {
    try {
      const orderData = await Order.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
        include: [
            {
                model: OrderInfo,
                attributes: ['order_status', 'client_name', 'delivery_location','ordered_on', 'shipped_by','delivered_by'],
            },
        ],
      });
      if (!orderData[0]) {
        res.status(404).json({ message: 'No order with this id!' });
        return;
      }
      res.status(200).json(orderData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
module.exports = router;