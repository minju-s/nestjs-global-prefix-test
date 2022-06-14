import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class Middleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    console.log(req.params.prefix);
    next();
  }
}
