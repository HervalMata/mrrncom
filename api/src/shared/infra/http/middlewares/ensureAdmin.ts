import {NextFunction, Request, Response} from "express";
import {UsersRepository} from "../../../../modules/accounts/repositories/implementations/UsersRepository";
import {AppError} from "../../../errors/AppError";

export async function ensureAdmin(
    req: Request, res: Response, next: NextFunction
) {
    const { id } = req.user;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);
    if (!user.isAdmin) {
        throw new AppError("User does not have admin privileges");
    }
    next();
}