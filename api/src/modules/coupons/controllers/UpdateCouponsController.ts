import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateCouponsService} from "../services/UpdateCouponsService";
import {Type} from "../entities/Coupon";

class UpdateCouponsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { type, value, expire_date } = req.body;
        const updateCouponsService = container.resolve(UpdateCouponsService);
        await updateCouponsService.execute({
            id: id as string,
            type: type as Type,
            value: value as number,
            expire_date: expire_date as Date,
        });
        return res.status(200).send();
    }
}

export { UpdateCouponsController };