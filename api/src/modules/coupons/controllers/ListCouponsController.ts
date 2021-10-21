import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListCouponsService} from "../services/ListCouponsService";

class ListCouponsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCouponsService = container.resolve(ListCouponsService);
        const all = await listCouponsService.execute();
        return res.json(all);
    }
}

export { ListCouponsController };