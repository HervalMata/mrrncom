import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListWishlistsService} from "../services/ListWishlistsService";

class ListWishlistsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const listWishlistsService = container.resolve(ListWishlistsService);
        const wishlists = await listWishlistsService.execute({ user_id });
        return res.json(wishlists);
    }
}

export { ListWishlistsController };