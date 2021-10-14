import {Request, Response} from "express";
import {container} from "tsyringe";
import {ActivateCategoriesService} from "../services/ActivateCategoriesService";

class ActivateCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { isActive } = req.body;
        const activateCategories = container.resolve(ActivateCategoriesService);
        const categories = await activateCategories.execute({
            id: id as string,
            // @ts-ignore
            isActive: isActive as boolean
        });
        return res.status(200).send();
    }
}

export { ActivateCategoriesController }