import { Request } from 'express';
import { JwtPayload } from '../middlewares/authMiddleware';

declare module 'express-serve-static-core' {
    interface Request {
      user?: JwtPayload;
    }
}
