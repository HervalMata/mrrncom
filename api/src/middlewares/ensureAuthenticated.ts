import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";
import {UsersRepository} from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request, res: Response, next: NextFunction
): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new Error("Token missing");
    }
    const [, token] = authHeader.split(" ");
    try {
        const { sub } = verify(token, "7981bfd87d1b88bec0b2d8c2b8aca8bd") as IPayload;
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(sub);
        if (!user) {
            throw new Error("User does not exists");
        }
    } catch (error) {
        throw new Error("Invalid token");
    }
    next();
}