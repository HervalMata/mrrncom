import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateDeliveryService} from "../services/CreateDeliveryService";

class CreateDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, postal_code, type, status, cost, prize, address_id } = req.body;
        const createDeliveryService = container.resolve(CreateDeliveryService);
        await createDeliveryService.execute({ id, postal_code, type, status, cost, prize, address_id });
        return res.status(201).send();
    }
}

export { CreateDeliveryController };