import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateOfferProductsService} from "../services/UpdateOfferProductsService";

class UpdateOfferProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { isOffer, discount } = req.body;
        const updateOfferProducts = container.resolve(UpdateOfferProductsService);
        await updateOfferProducts.execute({
            id: id as string,
            isOffer: isOffer as boolean,
            discount: discount as number,
        });
        return res.status(200).send();
    }
}

export { UpdateOfferProductsController };