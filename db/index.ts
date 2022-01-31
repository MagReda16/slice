import mongoose, { Schema } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URI: string = process.env.DB_URI!;

(async function connectToDb(): Promise<void> {
  try {
    await mongoose.connect(URI);
  } catch (e) {
    console.error('error connecting to DB', e);
  }
})();

export { Schema };
export default mongoose;
