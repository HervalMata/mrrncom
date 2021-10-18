import {inject, injectable} from "tsyringe";
import {IUsersProfileRepository} from "../repositories/IUsersProfileRepository";
import {UsersProfile} from "../entities/UsersProfile";

@injectable()
class ListUsersProfileService {

    constructor(
        @inject("UsersProfileRepository")
        private usersProfileRepository: IUsersProfileRepository
    ) {}

    async execute(): Promise<UsersProfile[]> {
        return await this.usersProfileRepository.list();
    }
}

export { ListUsersProfileService };