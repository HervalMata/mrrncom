import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetByIdDeliveriesService} from "../services/GetByIdDeliveriesService";

class GetByIdDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getByIdDeliveriesService = container.resolve(GetByIdDeliveriesService);
        await getByIdDeliveriesService.execute({
            id: id as string,
        });
        return res.status(200).send();
    }
}

export { GetByIdDeliveriesController };