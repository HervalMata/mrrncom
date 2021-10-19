import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateReviewService} from "../services/CreateReviewService";

class CreateReviewController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { user_id, product_id, description, rating } = req.body;
        const createReviewService = container.resolve(CreateReviewService);
        await createReviewService.execute({ user_id, product_id, description, rating });
        return res.status(201).send();
    }
}

export { CreateReviewController };