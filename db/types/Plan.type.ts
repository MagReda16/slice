import { Document } from 'mongoose';
import { Recipe } from './Recipe.type';

export interface Plan extends Document {
  userId: string;
  recipes: Recipe[];
}
