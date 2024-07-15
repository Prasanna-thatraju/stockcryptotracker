import mongoose, { Document, Schema } from 'mongoose';

interface IPriceData extends Document {
  symbol: string;
  price: number;
  timestamp: Date;
}

const PriceDataSchema: Schema = new Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, required: true },
});

const PriceData = mongoose.model<IPriceData>('PriceData', PriceDataSchema);

export default PriceData;
