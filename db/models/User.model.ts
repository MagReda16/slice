import mongoose, { Schema } from '../index';
import { User } from '../types/';

const userSchema: Schema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  currentPlanId: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
  },
});

export default mongoose.model<User>('User', userSchema);
