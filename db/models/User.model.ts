import mongoose, { Schema } from 'mongoose';
import { User } from '../types/';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  currentPlanId: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
  },
  budget: {
    type: Number,
    default: 0,
  },
});

const userModel =
  mongoose.models.User || mongoose.model<User>('User', userSchema);

export default userModel;
