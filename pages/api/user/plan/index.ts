import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import {
  errorHandler,
  authMiddleware,
  UserRequest,
} from '../../../../lib/server/';
import { User, Plan } from '../../../../db/models/';
import connectToDb from '../../../../db';
import { User as IUser, Plan as IPlan } from '../../../../lib/types';

const planHandler = nc(errorHandler);

planHandler.use(authMiddleware);

planHandler.get(
  async (req: UserRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();
    try {
      const plan: IPlan = await Plan.findOne({ _id: req.user.currentPlanId });
      res.status(200).json({ plan });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: true, message: 'Internal server error' });
    }
  }
);

planHandler.put(
  async (req: UserRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();
    try {
      const plan: IPlan = await Plan.findOne({ _id: req.user.currentPlanId });
      plan.recipes = [...req.body.recipes];
      plan.totalPlanCost = req.body.totalPlanCost;
      await plan.save();
      res.status(200).json({ plan });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: true, message: 'Internal server error' });
    }
  }
);

planHandler.post(
  async (req: UserRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();
    try {
      const newPlan: IPlan = await Plan.create({ userId: req.user._id });
      const user: IUser = await User.findOne({ _id: req.user._id });
      user.previousPlans.push(user.currentPlanId);
      user.currentPlanId = newPlan._id;
      await user.save();
      res.status(200).json({ plan: newPlan });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: true, message: 'Internal server error' });
    }
  }
);

export default planHandler;
