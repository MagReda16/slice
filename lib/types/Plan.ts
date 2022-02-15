import { Document } from 'mongoose';
import { Recipe } from '.';

export interface Plan extends Document {
  userId: string;
  recipes: Recipe[];
  totalPlanCost: number;
  createdAt: string;
}
