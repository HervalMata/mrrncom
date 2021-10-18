import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAddressByUserService} from "../services/GetAddressByUserService";

class GetAddressByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const getAddressByUserService = container.resolve(GetAddressByUserService);
        await getAddressByUserService.execute({ user_id: user_id });
        return res.status(200).send();
    }
}

export { GetAddressByUserController };