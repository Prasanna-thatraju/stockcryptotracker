import express from 'express';
import mongoose from 'mongoose';
import { startDataPolling } from './services/dataPoller';
import apiRoutes from './routes/api';

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/price-tracker';

mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  startDataPolling();
});
