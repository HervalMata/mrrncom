import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAvailableProductService} from "../services/GetAvailableProductService";

class GetAvailableProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getAvailabilityProduct = container.resolve(GetAvailableProductService);
        await getAvailabilityProduct.execute({
            id: id as string,
        });
        return res.status(200).send();
    }
}

export { GetAvailableProductController };