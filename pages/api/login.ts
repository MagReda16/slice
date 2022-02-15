import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../../lib/server';
import connectToDb from '../../db';
import { User, Plan } from '../../db/models';

const JWT_SECRET = process.env.JWT_SECRET!;

const loginHandler = nc(errorHandler);

loginHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDb();
  try {
    const { email, nickname, given_name } = req.body
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        nickname,
        given_name
      })
      const plan = await Plan.create({
        userId: user._id
      })
      user.currentPlanId = plan.id;
      await user.save();
    }
    const isBudget = !!user.budget;
    const accessToken: string = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).send({ accessToken, isBudget });
  } catch (e: any) {
    console.error(e);
    res
      .status(500)
      .send({ error: true, message: 'Something went wrong' });
  }
});

export default loginHandler;
