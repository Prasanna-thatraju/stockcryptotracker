import express from 'express';
import PriceData from '../models/PriceData';

const router = express.Router();

router.get('/prices/:symbol', async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const prices = await PriceData.find({ symbol }).sort({ timestamp: -1 }).limit(20).exec();
  res.json(prices);
});

export default router;
