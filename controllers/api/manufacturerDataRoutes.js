const router = require('express').Router();
const { ManufacturerData, Product } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        // Get all manufacturers and JOIN with product data
        const manufacturerData = await ManufacturerData.findAll({
            include: [
                {
                    model: Product,
                    attributes: ['name', 'quantity', 'category'],
                },
            ],
        });

        const manufacturer = manufacturerData.map((manufacturer) => manufacturer.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('manage.ejs', {
            ...manufacturer,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        // Get one manufacturer and JOIN with product data
        const manufacturerData = await ManufacturerData.findbyPk(req.params.id,{
            include: [
                {
                    model: Product,
                    attributes: ['name', 'quantity', 'category'],
                },
            ],
        });

        const manufacturer = manufacturerData.map((manufacturer) => manufacturer.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('manage.ejs', {
            ...manufacturer,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const newManufacturer = await ManufacturerData.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newManufacturer);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const manufacturerData = await ManufacturerData.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!manufacturerData) {
        res.status(404).json({ message: 'No manufacturer found with this id!' });
        return;
      }
  
      res.status(200).json(manufacturerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.put('/:id', withAuth, async (req, res) => {
    try {
      const manufacturerData = await ManufacturerData.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },

      });
      if (!manufacturerData[0]) {
        res.status(404).json({ message: 'No manufacturer with this id!' });
        return;
      }
      res.status(200).json(manufacturerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;