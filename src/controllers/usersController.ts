import { Request, Response } from 'express';
import UsersService from '../services/usersService';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const { code, allUsers } = await this.usersService.getAll();
    return res.status(code).json(allUsers);
  };

  public createUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const { code, token } = await this.usersService.createUser({
      username, classe, level, password,
    });

    return res.status(code).json({ token });
  };
}

export default UsersController;
