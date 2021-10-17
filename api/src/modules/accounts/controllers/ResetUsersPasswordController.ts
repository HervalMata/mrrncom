import {Request, Response} from "express";
import {container} from "tsyringe";
import {ResetUsersPasswordService} from "../services/ResetUsersPasswordService";

class ResetUsersPasswordController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { token } = req.query;
        const { password } = req.body;
        const resetUsersPasswordService = container.resolve(ResetUsersPasswordService);
        await resetUsersPasswordService.execute({
            token: String(token), password,
        });
        return res.status(200).send();
    }
}

export { ResetUsersPasswordController };