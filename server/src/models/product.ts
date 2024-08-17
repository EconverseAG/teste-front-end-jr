import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const productSchema: Schema = new Schema({
  productName: { type: String, required: true },
  descriptionShort: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<IProduct>('Product', productSchema);
