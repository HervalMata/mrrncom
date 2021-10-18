import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IUsersProfileRepository} from "../repositories/IUsersProfileRepository";
import {deleteFile} from "../../../utils/file";

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
        const usersProfile = await this.usersProfileRepository.findById(id);
        if (usersProfile.avatar) {
            await deleteFile(`./tmp/avatar/${usersProfile.avatar}`);
        }
        usersProfile.avatar = avatar;
        return await this.usersProfileRepository.update(id, phone_number, usersProfile.avatar);
    }
}

export { UpdateUsersProfileService };