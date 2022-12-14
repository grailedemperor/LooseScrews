const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/user', userRoutes);
router.use('/products ', productRoutes);
router.use('/orders', orderRoutes);


module.exports = router;