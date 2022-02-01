import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import nc from 'next-connect';
import { errorHandler } from '../../lib/server/';
import { User, Plan } from '../../db/models/';
import connectToDb from '../../db';

const SALT_ROUNDS = process.env.DB_SALT_ROUNDS!;
const registerHandler = nc(errorHandler);

registerHandler.post(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    await connectToDb();
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password)
      return res
        .status(400)
        .json({ error: true, message: 'Missing required information' });

    try {
      const isExistingUser = await User.exists({ email });
      if (isExistingUser)
        throw new Error('User with this email already exists');
      const hashedPass = await bcrypt.hash(
        req.body.password,
        parseInt(SALT_ROUNDS)
      );
      const user = await User.create({
        ...req.body,
        password: hashedPass,
      });
      const plan = await Plan.create({ userId: user._id });
      user.currentPlanId = plan._id;
      await user.save();
      res.status(200).json({ user });
    } catch (e: any) {
      console.error(e);
      res.status(409).json({ error: true, message: e.message });
    }
  }
);

export default registerHandler;
