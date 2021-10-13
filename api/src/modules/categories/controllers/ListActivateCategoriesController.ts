import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListCategoriesService} from "../services/ListCategoriesService";

class ListActivateCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const listActivateCategories = container.resolve(ListCategoriesService);
        const categories = await listActivateCategories.execute(name);
        return res.status(200).json(categories);
    }
}

export { ListActivateCategoriesController }