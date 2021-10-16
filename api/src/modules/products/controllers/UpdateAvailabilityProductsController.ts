import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateAvailabilityProductsService} from "../services/UpdateAvailabilityProductsService";

class UpdateAvailabilityProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { availability } = req.body;
        const updateAvailabilityProducts = container.resolve(UpdateAvailabilityProductsService);
        await updateAvailabilityProducts.execute({
            id: id as string,
            // @ts-ignore
            availability: availability as boolean
        });
        return res.status(200).send();
    }
}

export { UpdateAvailabilityProductsController };