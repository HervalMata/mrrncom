import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListReviewsService} from "../services/ListReviewsService";

class ListReviewsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listReviewsService = container.resolve(ListReviewsService);

        const all = await listReviewsService.execute();

        return res.json(all);
    }
}

export { ListReviewsController };