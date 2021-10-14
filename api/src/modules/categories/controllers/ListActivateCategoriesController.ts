import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListActivateCategoriesService} from "../services/ListActivateCategoriesService";

class ListActivateCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listActivateCategories = container.resolve(ListActivateCategoriesService);
        const categories = await listActivateCategories.execute();
        return res.status(200).json(categories);
    }
}

export { ListActivateCategoriesController }