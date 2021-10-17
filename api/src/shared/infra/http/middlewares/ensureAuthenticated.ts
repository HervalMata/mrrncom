import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";
import {UsersRepository} from "../../../../modules/accounts/repositories/implementations/UsersRepository";
import {AppError} from "../../../errors/AppError";
import auth from "../../../../config/auth";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request, res: Response, next: NextFunction
): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }
    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(token, auth.secret_token) as IPayload;
        req.user = { id: user_id };
        next();
    } catch (error) {
        throw new AppError("Invalid token");
    }
}