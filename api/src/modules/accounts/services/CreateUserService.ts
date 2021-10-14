import { hash } from 'bcryptjs';
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";


@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
        const passwordHash = await hash(password, 10);
        await this.usersRepository.create({ name, email, password: passwordHash });
    }
}

export { CreateUserService };