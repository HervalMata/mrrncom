import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../repositories/IUsersRepository";

interface IRequest {
    id: string;
    isAdmin: boolean;
}

@injectable()
class ActivateAdminUsersService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {
    }

    async execute({ id, isAdmin }: IRequest): Promise<void> {
        const user = this.usersRepository.findById(id);
        return await this.usersRepository.activateAdmin(
            id,
            isAdmin
        );
    }
}

export { ActivateAdminUsersService }