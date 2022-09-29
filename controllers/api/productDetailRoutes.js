const router = require('express').Router();
const { ProductDetails } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newProductDetail = await ProductDetails.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProductDetail);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/', withAuth, async (req, res) => {
    try {
      const productDetailData = await ProductDetails.destroy({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      if (!productDetailData) {
        res.status(404).json({ message: 'Product detail not found!' });
        return;
      }
  
      res.status(200).json(productDetailData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.put('/', withAuth, async (req, res) => {
    try {
      const productDetailData = await ProductDetails.update(req.body, {
        where: {
          user_id: req.session.user_id,
        },
      });
      if (!productDetailData[0]) {
        res.status(404).json({ message: 'Product detail not found' });
        return;
      }
      res.status(200).json(orderData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;