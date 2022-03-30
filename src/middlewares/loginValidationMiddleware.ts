import { NextFunction, Request, Response } from 'express';
import loginValidation from '../schemas/loginJoiSchema';

const loginValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(Number(code)).json({ error: errorMessage });
  }
  next();
};

export default loginValidationMiddleware;
