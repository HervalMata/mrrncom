import { hash } from 'bcryptjs';
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";
import {AppError} from "../../../shared/errors/AppError";


@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }
        const passwordHash = await hash(password, Number(process.env.DEFAULT_HASH_SALT));
        await this.usersRepository.create({ name, email, password: passwordHash });
    }
}

export { CreateUserService };