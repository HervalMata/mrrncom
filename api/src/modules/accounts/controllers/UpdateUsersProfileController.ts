import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateUsersProfileService} from "../services/UpdateUsersProfileService";

class UpdateUsersProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { phone_number, avatar } = req.body;
        const updateUsersProfileService = container.resolve(UpdateUsersProfileService);
        await updateUsersProfileService.execute({
            id: id as string,
            phone_number: phone_number as string,
            avatar: avatar as string,
        });
        return res.status(200).send();
    }
}

export { UpdateUsersProfileController };