import mongoose, { Schema } from '../index';
import Plan from '../types/Plan.type';

const planSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  recipes: [
    {
      imageURL: String,
      recipeId: Number,
      quantity: Number,
      totalCost: Number,
    },
  ],
});

export default mongoose.model<Plan>('Plan', planSchema);
