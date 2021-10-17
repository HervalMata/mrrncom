import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import { v4 as uuidV4 } from "uuid";
import {IUsersRepository} from "../repositories/IUsersRepository";
import {IUsersTokensRepository} from "../repositories/IUsersTokensRepository";
import {IDateProvider} from "../../../shared/container/providers/DateProvider/IDateProvider";
import {AppError} from "../../../shared/errors/AppError";

@injectable()
class SendForgotPasswordMailService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) {}

    async execute(email: string): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("User not found");
        }
        const expires_date = this.dateProvider.addHours(3, null);
        const token = uuidV4();
        await this.usersTokensRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date
        });
    }
}

export { SendForgotPasswordMailService };