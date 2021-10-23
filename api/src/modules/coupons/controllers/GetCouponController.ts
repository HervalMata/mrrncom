import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetCouponService} from "../services/GetCouponService";

class GetCouponController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getCouponService = container.resolve(GetCouponService);
        await getCouponService.execute({
            id: id as string,
        });
        return res.status(200).send();
    }
}

export { GetCouponController };