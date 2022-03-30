import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const { code, error, token } = await this.loginService.login({ username, password });

    if (!token) {
      return res.status(code).json({ error });
    }

    return res.status(code).json({ token });
  };
}

export default LoginController;
