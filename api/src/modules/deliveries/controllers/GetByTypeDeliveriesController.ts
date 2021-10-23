import {Request, Response} from "express";
import {container} from "tsyringe";
import {Type} from "../entities/Delivery";
import {GetByTypeDeliveriesService} from "../services/GetByTypeDeliveriesService";

class GetByTypeDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { type } = req.params;
        const getByTypeDeliveriesService = container.resolve(GetByTypeDeliveriesService);

        await getByTypeDeliveriesService.execute({
            // @ts-ignore
            type: type as Type
        });
        return res.status(200).send();
    }
}

export { GetByTypeDeliveriesController };