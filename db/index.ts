import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URI: string = process.env.DB_URI!;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

const connectToDb = async () => {
  if (cached.connection) return cached.connection;

  if (!cached.promise) {
    try {
      cached.promise = await mongoose.connect(URI);
      console.log('Successfully connected to DB');
    } catch (e) {
      console.error('Failed to connect to DB', e);
    }
  }

  cached.connection = await cached.promise;
  return cached.connection;
};

export default connectToDb;
