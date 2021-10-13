import {Request, Response} from "express";
import {container} from "tsyringe";
import {ActivateCategoriesService} from "../services/ActivateCategoriesService";

class ActivateCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { category_id, isActive } = req.query;
        const activateCategories = container.resolve(ActivateCategoriesService);

        const categories = await activateCategories.execute({
            category_id: category_id as string,
            // @ts-ignore
            isActive: isActive as boolean
        });
        return res.status(200).send();
    }
}

export { ActivateCategoriesController }