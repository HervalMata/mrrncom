import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListProductsByCategoryService} from "../services/ListProductsByCategoryService";

class ListProductsByCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { category_id } = req.params;
        const listProductsByCategory = container.resolve(ListProductsByCategoryService);
        await listProductsByCategory.execute({
            category_id: category_id as string,
        });
        return res.status(200).send();
    }
}

export { ListProductsByCategoryController };