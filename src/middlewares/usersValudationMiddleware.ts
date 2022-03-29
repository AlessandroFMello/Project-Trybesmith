import { NextFunction, Request, Response } from 'express';
import usersValidation from '../schemas/usersJoiSchema';

const usersValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { error } = usersValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(Number(code)).json({ error: errorMessage });
  }
  next();
};

export default usersValidationMiddleware;
