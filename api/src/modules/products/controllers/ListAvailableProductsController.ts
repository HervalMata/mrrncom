import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListAvailableProductsService} from "../services/ListAvailableProductsService";

class ListAvailableProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, category_id } = req.body;
        const listAvailableProductsService = container.resolve(ListAvailableProductsService);
        const products = await listAvailableProductsService.execute({
            category_id: category_id as string,
            name: name as string,
        });
        return res.status(200).json(products);
    }
}

export { ListAvailableProductsController };