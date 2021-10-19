import {Request, Response} from "express";
import {container} from "tsyringe";
import { GetReviewsByUserService } from "../services/GetReviewsByUserService";

class GetReviewsByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const getReviewsByUserService = container.resolve(GetReviewsByUserService);
        await getReviewsByUserService.execute({ user_id: user_id as string });
        return res.status(200).send();
    }
}

export { GetReviewsByUserController };