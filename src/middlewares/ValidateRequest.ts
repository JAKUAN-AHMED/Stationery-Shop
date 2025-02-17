import { NextFunction, Response, Request } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utility/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log('cookies',req.cookies);
    await schema.parseAsync(req.body, req.cookies);
    next();
  });
};

export default validateRequest;
