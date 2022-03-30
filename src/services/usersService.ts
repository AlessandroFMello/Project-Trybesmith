import NewUserShape from '../interfaces/newUser';
import { prisma } from '../models/connection';
import tokenGenerator from '../tokenGenerator';

class UsersService {
  public getAll = async () => {
    const allUsers = await prisma.user.findMany();

    return { code: 200, allUsers };
  };

  public createUser = async (user: NewUserShape) => {
    const newUser = await prisma.user.create({
      data: user,
    });

    const token = tokenGenerator(newUser.id, newUser.username);

    return { code: 201, token };
  };
}

export default UsersService;
