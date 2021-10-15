import {ICreateUserDTO} from "../dtos/ICreateUserDTO";
import {User} from "../entities/User";

interface IUsersRepository {
    [x: string]: any;
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    list(): Promise<User[]>;
    activateAdmin(id: string, isAdmin: boolean): Promise<void>;
}

export { IUsersRepository };