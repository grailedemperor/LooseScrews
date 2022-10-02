const router = require('express').Router();

<<<<<<< HEAD
const homeRoutes = require('./homeRoutes');
=======
const homeRoutes = require('./homeRoutes.js');
>>>>>>> 4f8afbf1fd061983c7c0e089d9d227f4800d2d59
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
