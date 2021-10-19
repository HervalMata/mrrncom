import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetReviewsByProductService} from "../services/GetReviewsByProductService";

class GetReviewsByProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { product_id } = req.params;
        const getReviewsByProductService = container.resolve(GetReviewsByProductService);
        await getReviewsByProductService.execute({ product_id: product_id as string });
        return res.status(200).send();
    }
}

export { GetReviewsByProductController };