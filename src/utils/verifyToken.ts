import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { loggerAuth } from '../logs/logs.config';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  loggerAuth.info(`Token verification`);
  const token = req.headers['x-access-token'] as string;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded) => {
      if (err) {
        loggerAuth.warn(`Authorization failed`);
        res.status(403).json({ error: true, massage: 'Authorization failed' });
        return;
      }
      loggerAuth.info(`Verification passed`);
      //@ts-ignore
      res.decoded = decoded;
      next();
    });
  } else {
    loggerAuth.error(`statusCode: 500, error: true, massage: 'No token'`);
    res.status(500).json({ error: true, massage: 'No token' });
  }
};
