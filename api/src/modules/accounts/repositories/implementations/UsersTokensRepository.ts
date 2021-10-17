import {IUsersTokensRepository} from "../IUsersTokensRepository";
import {ICreateUserTokenDTO} from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UserTokens";
import {getRepository, Repository} from "typeorm";

class UsersTokensRepository implements IUsersTokensRepository{
    private repository: Repository<UserTokens>;

    constructor() {
        this.repository = getRepository(UserTokens);
    }

    async create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = this.repository.create({
            user_id, refresh_token, expires_date
        });
        await this.repository.save(userToken);
        return userToken;
    }

}

export { UsersTokensRepository };