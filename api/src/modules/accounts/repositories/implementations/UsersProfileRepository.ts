import {IUsersProfileRepository} from "../IUsersProfileRepository";
import {ICreateUsersProfileDTO} from "../../dtos/ICreateUsersProfileDTO";
import {UsersProfile} from "../../entities/UsersProfile";
import {getRepository, Repository} from "typeorm";

class UsersProfileRepository implements IUsersProfileRepository {
    private repository: Repository<UsersProfile>;

    constructor() {
        this.repository = getRepository(UsersProfile);
    }

    async create(data: ICreateUsersProfileDTO): Promise<void> {
        const { id, user_id, cpf, phone_number, avatar } = data;
        const users_profile = this.repository.create({
            id, user_id, cpf, phone_number, avatar
        });
        await this.repository.save(users_profile);
    }

    async findByUserId(user_id: string): Promise<UsersProfile> {
        return await this.repository.findOne(user_id);
    }

    async list(): Promise<UsersProfile[]> {
        return await this.repository.find();
    }

    async update(id: string, phone_number: string, avatar: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ phone_number: phone_number, avatar: avatar})
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

    async findByCPF(cpf: string): Promise<UsersProfile> {
        return await this.repository.findOne(cpf);
    }

    async findById(id: string): Promise<UsersProfile> {
        return await this.repository.findOne(id);
    }

}

export { UsersProfileRepository };