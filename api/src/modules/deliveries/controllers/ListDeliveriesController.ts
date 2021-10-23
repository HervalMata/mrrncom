import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListDeliveriesService} from "../services/ListDeliveriesService";

class ListDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listDeliveriesService = container.resolve(ListDeliveriesService);
        const all = await listDeliveriesService.execute();
        return res.json(all);
    }
}

export { ListDeliveriesController };