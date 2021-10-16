import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdatePriceProductsService} from "../services/UpdatePriceProductsService";

class UpdatePriceProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { price } = req.body;
        const updatePriceProducts = container.resolve(UpdatePriceProductsService);
        await updatePriceProducts.execute({
            id: id as string,
            price: price as number
        });
        return res.status(200).send();
    }
}

export { UpdatePriceProductsController };