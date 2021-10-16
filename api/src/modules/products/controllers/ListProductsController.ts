import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListProductsService} from "../services/ListProductsService";

class ListProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listProductsService = container.resolve(ListProductsService);
        const all = await listProductsService.execute();
        return res.json(all);
    }
}

export { ListProductsController };