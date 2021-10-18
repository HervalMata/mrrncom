import {ICreateUsersProfileDTO} from "../dtos/ICreateUsersProfileDTO";
import {UsersProfile} from "../entities/UsersProfile";

interface IUsersProfileRepository {
    create(data: ICreateUsersProfileDTO): Promise<void>;
    findByUserId(user_id: string): Promise<UsersProfile>;

    update(id: string, phone_number: string, avatar: string): Promise<void>;
    list(): Promise<UsersProfile[]>;
    findByCPF(cpf: string): Promise<UsersProfile>;
    findById(id: string): Promise<UsersProfile>;
}

export { IUsersProfileRepository };