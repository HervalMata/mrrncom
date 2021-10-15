import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import {usersRoutes} from "./users.routes";
import {authenticateRoutes} from "./authenticate.routes";
import {colorsRoutes} from "./colors.routes";

const router = Router();
router.use("/categories", categoriesRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/colors", colorsRoutes);

export { router };