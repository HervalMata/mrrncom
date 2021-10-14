import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";
import {UsersRepository} from "../modules/accounts/repositories/implementations/UsersRepository";
import {AppError} from "../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request, res: Response, next: NextFunction
): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError("Token missing");
    }
    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(token, "7981bfd87d1b88bec0b2d8c2b8aca8bd") as IPayload;
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);
        if (!user) {
            throw new AppError("User does not exists");
        }
        req.user = { id: user_id };
        next();
    } catch (error) {
        throw new AppError("Invalid token");
    }
}