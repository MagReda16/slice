import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { errorHandler, authMiddleware } from '../../../lib/server/';
import { User, Plan } from '../../../db/models/';
import connectToDb from '../../../db';
import { User as IUser, Plan as IPlan } from '../../../db/types';

const planHandler = nc(errorHandler);

planHandler.use(authMiddleware);

planHandler.get(async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectToDb();
  try {
    const plan: IPlan = await Plan.findOne({ _id: req.body.user.currentPlanId });
    plan.totalPlanCost = plan.recipes
      .map(recipe => recipe.quantity * recipe.totalCost)
      .reduce((acc: number, recipeTotalCost: number) => acc += recipeTotalCost, 0);
    await plan.save();
    res.status(200).json({ plan });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: true, message: 'Internal server error' });
  }
});

planHandler.put(async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await connectToDb();
  try {
    const plan: IPlan = await Plan.findOne({ _id: req.body.user.currentPlanId });
    plan.totalPlanCost = plan.recipes
      .map(recipe => recipe.quantity * recipe.totalCost)
      .reduce((acc: number, recipeTotalCost: number) => acc += recipeTotalCost, 0);
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
    const newPlan: IPlan = await Plan.create({ userId: req.body.user._id });
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