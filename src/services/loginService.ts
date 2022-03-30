import UserDataShape from '../interfaces/userData';
import { prisma } from '../models/connection';
import tokenGenerator from '../tokenGenerator';

class LoginService {
  public login = async (userData: UserDataShape) => {
    const { username, password } = userData;
    const user = await prisma.user.findFirst({ where: { username } });

    if (!user || user.password !== password) {
      return { code: 401, error: 'Username or password invalid' };
    }

    const token = tokenGenerator(user.id, user.username);

    return { code: 200, token };
  };
}

export default LoginService;