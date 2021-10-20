import { Router } from "express";
import {CreateWishlistController} from "../../../../modules/wishlists/controllers/CreateWishlistController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";

const wishlistsRoutes = Router();
const createWishlistController = new CreateWishlistController();

wishlistsRoutes.post("/", ensureAuthenticated, createWishlistController.handle);

export { wishlistsRoutes };