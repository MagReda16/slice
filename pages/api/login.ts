import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { errorHandler } from '../../lib/server';
import connectToDb from '../../db';
import { User } from '../../db/models';

const JWT_SECRET = process.env.JWT_SECRET!;

const loginHandler = nc(errorHandler);

loginHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDb();
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error();
    const isValidPassword: boolean = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error();
    const accessToken: string = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).send({ accessToken });
  } catch (e: any) {
    console.error(e);
    res.status(402).send({error: true, message: 'Email or password is incorrect'});
  }
});

export default loginHandler;