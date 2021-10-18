import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IUsersProfileRepository} from "../repositories/IUsersProfileRepository";
import {ICreateUsersProfileDTO} from "../dtos/ICreateUsersProfileDTO";
import {AppError} from "../../../shared/errors/AppError";

@injectable()
class CreateUsersProfileService {

    constructor(
        @inject("UsersProfileRepository")
        private usersProfileRepository: IUsersProfileRepository
    ) {}

    async execute({ user_id, cpf, phone_number, avatar }: ICreateUsersProfileDTO): Promise<void> {
        const cpfAlreadyExists = await this.usersProfileRepository.findByCPF(cpf);
        if (cpfAlreadyExists) {
            throw new AppError("User cpf already exists");
        }
        const userAlreadyExists = await this.usersProfileRepository.findByUserId(user_id);
        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }
        await this.usersProfileRepository.create({ user_id, cpf, phone_number, avatar });
    }
}

export { CreateUsersProfileService };