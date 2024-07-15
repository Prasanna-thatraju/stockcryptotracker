import axios from 'axios';
import PriceData from '../models/PriceData';

const symbols = ['GOOG', 'BTC', 'ETH', 'AAPL', 'AMZN'];

const fetchPriceData = async () => {
  try {
    const responses = await Promise.all(symbols.map(symbol => 
      axios.get(`https://api.example.com/price?symbol=${symbol}`)
    ));

    const priceDataEntries = responses.map((response, index) => ({
      symbol: symbols[index],
      price: response.data.price,
      timestamp: new Date(),
    }));

    await PriceData.insertMany(priceDataEntries);
    console.log('Price data updated');
  } catch (error) {
    console.error('Error fetching price data:', error);
  }
};

export const startDataPolling = () => {
  fetchPriceData();
  setInterval(fetchPriceData, 5000);
};
