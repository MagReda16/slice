import { Document } from 'mongoose';

export default interface User extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
