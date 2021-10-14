import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new Error("Email or password incorrect");
        }
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email or password incorrect");
        }
        const token = sign({}, "7981bfd87d1b88bec0b2d8c2b8aca8bd", {
            subject: user.id, expiresIn: "1d",
        });
        return {
            user: {
                email: user.email,
                name: user.name,
            },
            token,
        };
    }
}

export { AuthenticateUserService };