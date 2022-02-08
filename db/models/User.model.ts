import mongoose, { Schema } from 'mongoose';
import { User } from '../../lib/types';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  given_name: {
    type: String,
    required: false,
  },
  nickname: {
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
  previousPlans: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Plan',
    }
  ]
});

const userModel =
  mongoose.models.User || mongoose.model<User>('User', userSchema);

export default userModel;
