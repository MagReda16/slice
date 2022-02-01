import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { errorHandler, authMiddleware } from '../../../lib/server/';
import { User, Plan } from '../../../db/models/';
import connectToDb from '../../../db';
import { User as IUser, Plan as IPlan } from '../../../db/types';

const planHandler = nc(errorHandler);

// userID 61f85a8a65439a35c55bbcbb

planHandler.use(authMiddleware);

planHandler.get(async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectToDb();
  try {
    // replace _id with req.body.user.currentPlanId once auth implemented
    console.log(req.body.user);
    const plan: IPlan = await Plan.findOne({ _id: req.body.user.currentPlanId });
    res.status(200).json({ plan });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: true, message: 'Internal server error' });
  }
});

planHandler.put(async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectToDb();
  try {
    // replace _id with req.body.user.currentPlanId once auth implemented
    const plan: IPlan = await Plan.findOne({ _id: req.body.user.currentPlanId });
    plan.recipes = [...req.body];
    await plan.save();
    res.status(200).json({ plan });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: true, message: 'Internal server error' });
  }
});

planHandler.post(async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectToDb();
  try {
    // replace userId with req.body.user._id once auth implemented
    const newPlan: IPlan = await Plan.create({ userId: req.body.user._id });
    // replace _id with req.body.user._id once auth implemented
    const user: IUser = await User.findOne({ _id: req.body.user._id });
    user.previousPlans.push(user.currentPlanId);
    user.currentPlanId = newPlan._id;
    await user.save();
    res.status(200).json({ plan: newPlan });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: true, message: 'Internal server error' });
  }
});

export default planHandler;