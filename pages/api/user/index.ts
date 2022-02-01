import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { errorHandler, authMiddleware } from '../../../lib/server';
import { User } from '../../../db/models/';
import { User as IUser } from '../../../db/types/';
import connectToDb from '../../../db';

const userHandler = nc(errorHandler);

userHandler.use(authMiddleware);

userHandler.get(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.status(200).json({ user: req.body.user });
  }
);

userHandler.put(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();
    try {
      const updatedUser: IUser = await User.findByIdAndUpdate(
        req.body.user._id,
        {
          budget: req.body.budget
        },
        {
          new: true,
        }
      );
      if (!updatedUser) throw new Error('User cannot be found');
      res.status(200).json({ user: updatedUser });
    } catch (e: any) {
      console.error(e);
      res.status(404).json({ error: true, message: e.message });
    }
  }
);

export default userHandler;
