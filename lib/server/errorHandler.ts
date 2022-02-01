import { NextApiRequest, NextApiResponse } from 'next';

const errorHandler = {
  onError: (
    err: Error,
    req: NextApiRequest,
    res: NextApiResponse,
    next: Function
  ) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    res.status(404).end('Page is not found');
  },
};

export { errorHandler };
