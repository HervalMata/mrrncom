import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateWishlistService} from "../services/CreateWishlistService";

class CreateWishlistController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id, products } = req.body;
        const createWishlistService = container.resolve(CreateWishlistService);
        await createWishlistService.execute({user_id, products});
        return res.status(201).send();
    }
}

export { CreateWishlistController };