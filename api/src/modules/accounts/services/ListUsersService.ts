import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../repositories/IUsersRepository";
import {User} from "../entities/User";

@injectable()
class ListUsersService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(): Promise<User[]> {
        return await this.usersRepository.list();
    }
}

export { ListUsersService };