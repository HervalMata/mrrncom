import {Request, Response} from "express";
import {container} from "tsyringe";
import {ActivateAdminUsersService} from "../services/ActivateAdminUsersService";

class ActivateAdminUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { isAdmin } = req.body;
        const activateAdminUsers = container.resolve(ActivateAdminUsersService);
        const users = await activateAdminUsers.execute({
            id: id as string,
            // @ts-ignore
            isAdmin: isAdmin as boolean
        });
        return res.status(200).send();
    }
}

export { ActivateAdminUsersController }