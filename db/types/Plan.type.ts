import { Document } from 'mongoose';
import Recipe from './Recipe.type';

export default interface Plan extends Document {
  userId: string;
  recipes: Recipe[];
}
