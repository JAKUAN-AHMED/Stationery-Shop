import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';

import AppError from '../errors/AppError';
import config from '../config';
import { TUSER_ROLE } from '../modules/user/user.interface';

import httpStatus from 'http-status';
import catchAsync from '../utility/catchAsync';
import UserModel from '../modules/user/user.model';

const auth = (...requiredRoles: TUSER_ROLE[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    //check if token sent from the client
    if (!token) {
      throw new AppError(
        500,
        'forbidden',
        'You are not authorized to access this route',
      );
    }

    // Verify the token asynchronously
    const decoded = jwt.verify(
      token,
      config.access_token_secret as string,
    ) as JwtPayload;
    //check if the user has the required role to access the route

    const { role, userId, iat } = decoded;
    // checking if the user is exist
    const user = await UserModel.isUserExistByCustomId(userId);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized  hi!',
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
