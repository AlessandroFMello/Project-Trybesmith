import { NextFunction, Request, Response } from 'express';
import productsValidation from '../schemas/productsJoiSchema';

const productsValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productsValidation.validate(req.body);

  if (error) {
    const [code, errorMessage] = error.message.split('|');
    return res.status(Number(code)).json({ error: errorMessage });
  }
  next();
};

export default productsValidationMiddleware;
