import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateProductsService} from "../services/CreateProductsService";

class CreateProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description, stock, price, category_id } = req.body;
        const createProductsService = container.resolve(CreateProductsService);
        const product = await createProductsService.execute({
            name, description, stock, price, category_id
        });
        return res.status(201).json(product);
    }
}

export { CreateProductsController };