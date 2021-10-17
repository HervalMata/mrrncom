import {inject, injectable} from "tsyringe";
import {IUsersTokensRepository} from "../repositories/IUsersTokensRepository";
import {IDateProvider} from "../../../shared/container/providers/DateProvider/IDateProvider";
import {sign, verify} from "jsonwebtoken";
import auth from "../../../config/auth";
import {AppError} from "../../../shared/errors/AppError";

interface IPayload {
    sub:string;
    email: string;
}

@injectable()
class RefreshTokenService {

    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) {}

    async execute(token: string): Promise<string> {
        const { email, sub: user_id } = verify(token, auth.secret_refresh_token) as IPayload;
        const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(user_id, token);
        if (!userToken) {
            throw new AppError("Refresh token does not exists!");
        }
        await this.usersTokensRepository.deleteById(userToken.id);
        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: user_id, expiresIn: auth.expires_in_refresh_token
        });
        const expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days, null);
        await this.usersTokensRepository.create({
            refresh_token, user_id, expires_date
        });
        return refresh_token;
    }
}

export { RefreshTokenService };