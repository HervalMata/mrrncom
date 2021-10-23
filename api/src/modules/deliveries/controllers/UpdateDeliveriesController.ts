import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateDeliveryService} from "../services/UpdateDeliveryService";
import {Status, Type} from "../entities/Delivery";

class UpdateDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { postal_code, type, status, cost, prize, address_id } = req.body;
        const updateDeliveriesService = container.resolve(UpdateDeliveryService);
        await updateDeliveriesService.execute({
            id: id as string,
            postal_code: postal_code as string,
            type: type as Type,
            status: status as Status,
            cost: cost as number,
            prize: prize as number,
            address_id: address_id as string,
        });
        return res.status(200).send();
    }
}

export { UpdateDeliveriesController };