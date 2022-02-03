import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  budget: number;
  currentPlanId: string;
  previousPlans: string[];
}
