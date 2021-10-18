import 'reflect-metadata';
import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListUsersProfileService} from "../services/ListUsersProfileService";

class ListUsersProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listUsersProfileService = container.resolve(ListUsersProfileService);
        const all = await listUsersProfileService.execute();
        return res.json(all);
    }
}

export { ListUsersProfileController };