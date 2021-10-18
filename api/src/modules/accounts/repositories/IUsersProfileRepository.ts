import {ICreateUsersProfileDTO} from "../dtos/ICreateUsersProfileDTO";
import {UsersProfile} from "../entities/UsersProfile";
import {IUpdateUsersProfileDTO} from "../dtos/IUpdateUsersProfileDTO";

interface IUsersProfileRepository {
    create(data: ICreateUsersProfileDTO): Promise<void>;
    findByUserId(user_id: string): Promise<UsersProfile>;
    update(data: IUpdateUsersProfileDTO): Promise<void>;
    list(): Promise<UsersProfile[]>;
    findByCPF(cpf: string): Promise<UsersProfile>;
}

export { IUsersProfileRepository };