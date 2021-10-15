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
        const { id, name, email, password, avatar } = data;
        const user = this.repository.create({
            id, name, email, password, avatar,
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({email});
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }

    async activateAdmin(id: string, isAdmin: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({isAdmin: isAdmin})
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

    async list(): Promise<User[]> {
        return await this.repository.find();
    }
}

export { UsersRepository };