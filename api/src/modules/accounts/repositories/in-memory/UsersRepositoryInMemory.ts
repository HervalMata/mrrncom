import {IUsersRepository} from "../IUsersRepository";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {User} from "../../entities/User";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = [];

    async create(data: ICreateUserDTO): Promise<void> {
        const { name, email, password, avatar } = data;
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
}

export { UsersRepositoryInMemory };