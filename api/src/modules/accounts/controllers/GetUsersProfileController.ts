import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetUsersProfileService} from "../services/GetUsersProfileService";

class GetUsersProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const getUsersProfileService = container.resolve(GetUsersProfileService);
        await getUsersProfileService.execute({ user_id: user_id as string });
        return res.status(200).send();
    }
}

export { GetUsersProfileController };