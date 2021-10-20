import { Router } from "express";
import {CreateWishlistController} from "../../../../modules/wishlists/controllers/CreateWishlistController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListWishlistsController} from "../../../../modules/wishlists/controllers/ListWishlistsController";

const wishlistsRoutes = Router();
const createWishlistController = new CreateWishlistController();
const listWishlistsController = new ListWishlistsController();

wishlistsRoutes.post("/", ensureAuthenticated, createWishlistController.handle);
wishlistsRoutes.get("/:user_id", ensureAuthenticated, listWishlistsController.handle);

export { wishlistsRoutes };