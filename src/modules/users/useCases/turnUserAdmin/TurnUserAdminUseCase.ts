import { CustomError } from "../../model/CustomError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      // status erro incorreto mas conforme requisitado no teste
      throw new CustomError(404,'User not found!');
    }
    const userAdmin = this.usersRepository.turnAdmin(userExists);
    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
