import mongoose from 'mongoose';
import { ConnectionOptions } from 'tls';

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectionOptions);
    console.log('Database is connected');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default connectDB;
