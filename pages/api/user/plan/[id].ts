import type { NextApiResponse } from 'next';
import nc from 'next-connect';
import {
  errorHandler,
  authMiddleware,
  UserRequest,
} from '../../../../lib/server/';
import { Plan } from '../../../../db/models/';
import connectToDb from '../../../../db';
import { User as IUser, Plan as IPlan } from '../../../../lib/types';

const planHandler = nc(errorHandler);

planHandler.use(authMiddleware);

planHandler.get(
  async (req: UserRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();
    try {
      const { id } = req.query;
      const plan: IPlan = await Plan.findOne({ _id: id });
      if (!plan) throw new Error();
      res.status(200).json({ plan });
    } catch (e: any) {
      console.error(e);
      res.status(404).json({ error: true, message: 'Post with this id doesn\'t exist' });
    }
  }
);

export default planHandler;