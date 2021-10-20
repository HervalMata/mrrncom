import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import {usersRoutes} from "./users.routes";
import {authenticateRoutes} from "./authenticate.routes";
import {colorsRoutes} from "./colors.routes";
import {materialsRoutes} from "./materials.routes";
import {productsRoutes} from "./products.routes";
import {passwordRoutes} from "./password.routes";
import {addressRoutes} from "./address.routes";
import {reviewsRoutes} from "./reviews.routes";
import {wishlistsRoutes} from "./wishlists.routes";

const router = Router();
router.use("/categories", categoriesRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/colors", colorsRoutes);
router.use("/materials", materialsRoutes);
router.use("/products", productsRoutes);
router.use("/password", passwordRoutes);
router.use("/address", addressRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/wishlists", wishlistsRoutes);

export { router };