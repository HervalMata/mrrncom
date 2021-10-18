import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IUsersProfileRepository} from "../repositories/IUsersProfileRepository";

interface IRequest {
    id: string;
    phone_number?: string;
    avatar?: string;
}

@injectable()
class UpdateUsersProfileService {

    constructor(
        @inject("UsersProfileRepository")
        private usersProfileRepository: IUsersProfileRepository
    ) {}

    async execute({ id, phone_number, avatar }: IRequest): Promise<void> {
        return await this.usersProfileRepository.update(id, phone_number, avatar);
    }
}

export { UpdateUsersProfileService };