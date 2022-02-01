import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import { User as IUser } from '../../db/types';
import { User } from '../../db/models';

const JWT_SECRET = process.env.JWT_SECRET!;
declare module 'jsonwebtoken' {
  export interface JwtPayload {
    userId: string;
  }
}

const authMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: Function): Promise<void> => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) throw new Error();
    const accessToken: string = authorization.split(' ')[1];
    const { userId } = <jwt.JwtPayload>jwt.verify(accessToken, JWT_SECRET);
    const user: IUser = await User.findOne({ _id: userId });
    if (!user) throw new Error();
    req.body.user = user;
    next();
  } catch (e: any) {
    console.error(e);
    res.status(403).send({ error: true, message: 'Unathorized request' });
  }
}

export { authMiddleware };