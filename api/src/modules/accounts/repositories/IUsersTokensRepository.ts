import {ICreateUserTokenDTO} from "../dtos/ICreateUserTokenDTO";
import {UserTokens} from "../entities/UserTokens";

interface IUsersTokensRepository {
    create(data: ICreateUserTokenDTO): Promise<UserTokens>;
}

export { IUsersTokensRepository };