import {IUsersRepository} from "../IUsersRepository";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {getRepository, Repository} from "typeorm";
import {User} from "../../entities/User";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create(data: ICreateUserDTO): Promise<void> {
        const { name, email, password } = data;
        const user = this.repository.create({
            name, email, password
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({email});
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }
}

export { UsersRepository };