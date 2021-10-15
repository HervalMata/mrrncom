import {IUsersRepository} from "../IUsersRepository";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {User} from "../../entities/User";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = [];

    async create({ name, email, password, avatar }: ICreateUserDTO
    ): Promise<void> {
        const user = new User();
        Object.assign(user, {
            name, email, password, avatar,
        });
        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }

    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }

    async activateAdmin(id: string, isAdmin: boolean): Promise<void> {
        const userIndex = this.users.findIndex((user) => user.id === id);
        this.users[userIndex].isAdmin = isAdmin;
    }

    async list(): Promise<User[]> {
        return this.users;
    }
}

export { UsersRepositoryInMemory };