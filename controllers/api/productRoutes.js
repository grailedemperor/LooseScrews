const router = require('express').Router();
const { Products, ProductDetails, ManufacturerData } = require('../../models');
const withAuth = require('../utils/auth');
const manufacturerDataRoutes = require('./manufacturerDataRoutes');
const productDetailsRoutes = require('./productDetailsRoutes');
router.use('/manufacturers', manufacturerDataRoutes);
router.use(':id/manage-product/edit-details ', productDetailsRoutes);


router.get('/', withAuth, async (req, res) => {
    try {
        // Get all products and JOIN with product details and manufacturer data
        const productData = await Products.findAll({
            exclude: [{ attributes: ['id'] }],
            include: [
                {
                    model: ProductDetails, ManufacturerData,
                    attributes: ['price', 'size', 'category', 'type_or_material', 'description', 'product_image','manufacturer_location'],
                },
            ],
        });

        const product = productData.map((product) => product.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('PAGE WITH PRODUCT INFO', {
            ...product,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        // Get one manufacturer and JOIN with product details and manufacturer data
        const productData = await Products.findbyPk(req.body.brand_or_manufacturer, {
            exclude: [{ attributes: ['id'] }],
            include: [
                {
                    model: ProductDetails, ManufacturerData,
                    attributes: ['price', 'size', 'category', 'type_or_material', 'description', 'product_image','manufacturer_location'],
                },
            ],
        });

        const product = productData.map((product) => product.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('PAGE WITH PRODUCT INFO', {
            ...product,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/manage-product', withAuth, async (req, res) => {
    try {
        const newProduct = await Products.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProduct);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id/manage-product', withAuth, async (req, res) => {
    try {
        const productData = await Products.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
            include: [
                {
                    model: ProductDetails,
                    attributes: ['brand','price', 'size', 'category', 'type_or_material', 'description', 'manufacturer_location','product_image','product_id'],
                },
            ],
        });

        if (!productData) {
            res.status(404).json({ message: 'No product found with this id!' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id/manage-product', withAuth, async (req, res) => {
    try {
        const productData = await Products.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
            include: [
                {
                    model: ProductDetails,
                    attributes: ['brand','price', 'size', 'category', 'type_or_material', 'description', 'manufacturer_location','product_image','product_id'],
                },
            ],

        });
        if (!productData[0]) {
            res.status(404).json({ message: 'No product with this id!' });
            return;
        }
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;