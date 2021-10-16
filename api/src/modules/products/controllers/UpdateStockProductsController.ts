import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateStockProductsService} from "../services/UpdateStockProductsService";

class UpdateStockProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { stock } = req.body;
        const updateStockProducts = container.resolve(UpdateStockProductsService);
        await updateStockProducts.execute({
            id: id as string,
            stock: stock as number
        });
        return res.status(200).send();
    }
}

export { UpdateStockProductsController };
