import mongoose, { Schema } from 'mongoose';
import { Plan } from '../types/';

const planSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalRecipeCost: {
    type: Number,
    default: 0
  },
  recipes: [
    {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true
      },
      recipeId: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      totalCost: {
        type: Number,
        required: true,
      },
    },
  ],
});

const planModel =
  mongoose.models.Plan || mongoose.model<Plan>('Plan', planSchema);

export default planModel;
