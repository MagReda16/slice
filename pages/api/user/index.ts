import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { errorHandler } from '../../../lib/server';
import { User } from '../../../db/models/';
import { User as IUser } from '../../../db/types/';
import connectToDb from '../../../db';

const userHandler = nc(errorHandler);

userHandler.get(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();

    try {
      const user = await User.findById(req.body._id);
      if (!user) throw new Error('User cannot be found');
      res.status(200).json(user);
    } catch (error: any) {
      console.error(error);
      res.status(404).json({ error });
    }
  }
);

userHandler.put(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();

    try {
      const updatedUser: IUser = await User.findByIdAndUpdate(
        req.body._id,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedUser) throw new Error('User cannot be found');
      res.status(200).json({ updatedUser });
    } catch (error: any) {
      console.error(error);
      res.status(404).json({ error, message: error.message });
    }
  }
);

export default userHandler;
