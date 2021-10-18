import { ICreateUsersProfileDTO } from "../../dtos/ICreateUsersProfileDTO";
import { UsersProfile } from "../../entities/UsersProfile";
import {IUsersProfileRepository} from "../IUsersProfileRepository";
import {IUpdateUsersProfileDTO} from "../../dtos/IUpdateUsersProfileDTO";

class UsersProfileRepositoryInMemory implements IUsersProfileRepository {
    usersProfile: UsersProfile[] = [];

    async create({ user_id, cpf, phone_number, avatar }: ICreateUsersProfileDTO): Promise<void> {
        const usersProfile = new UsersProfile();
        Object.assign(usersProfile, {
            user_id, cpf, phone_number, avatar
        })
        this.usersProfile.push(usersProfile);
    }

    async findByUserId(user_id: string): Promise<UsersProfile> {
        return this.usersProfile.find((usersProfile) => usersProfile.user_id === user_id);
    }

    async list(): Promise<UsersProfile[]> {
        return this.usersProfile;
    }

    async update({ id, phone_number, avatar }: IUpdateUsersProfileDTO): Promise<void> {
        const usersProfileIndex = this.usersProfile.findIndex((usersProfile) => usersProfile.id === id);
        this.usersProfile[usersProfileIndex].phone_number = phone_number;
        this.usersProfile[usersProfileIndex].avatar = avatar;
    }

    async findByCPF(cpf: string): Promise<UsersProfile> {
        return this.usersProfile.find((usersProfile) => usersProfile.cpf === cpf);
    }

}

export { UsersProfileRepositoryInMemory };