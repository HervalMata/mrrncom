import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateUsersProfileService} from "../services/CreateUsersProfileService";

class CreateUsersProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const { cpf, phone_number, avatar } = req.body;
        const createUsersProfileService = container.resolve(CreateUsersProfileService);
        await createUsersProfileService.execute({ user_id, cpf, phone_number, avatar });
        return res.status(201).send();
    }
}

export { CreateUsersProfileController };