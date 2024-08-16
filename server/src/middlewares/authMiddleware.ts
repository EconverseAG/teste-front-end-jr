import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as Errors from '../utils/errors';


export interface JwtPayload {
    id: string;
}

declare module 'express-serve-static-core' {
    interface Request {
      user?: JwtPayload;
    }
  }
  
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) return res.status(401).json({ message: Errors.UnauthorizedError });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido ou expirado' });
    }
};
