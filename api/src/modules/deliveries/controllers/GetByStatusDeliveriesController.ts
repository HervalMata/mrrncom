import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetByTypeDeliveriesService} from "../services/GetByTypeDeliveriesService";
import {Status} from "../entities/Delivery";

class GetByStatusDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { status } = req.params;
        const getByTypeDeliveriesService = container.resolve(GetByTypeDeliveriesService);

        await getByTypeDeliveriesService.execute({
            // @ts-ignore
            status: status as Status
        });
        return res.status(200).send();
    }
}

export { GetByStatusDeliveriesController };