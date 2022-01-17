import { CustomError } from "../../model/CustomError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      // status erro incorreto mas conforme requisitado no teste
      throw new CustomError(400, 'User not found!');
    }
    if (user.admin === false){
      // status erro incorreto mas conforme requisitado no teste
      throw new CustomError(400, 'Unauthorized user for this request !');
    }
     
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
