import { Router } from "express";
import {CreateColorsController} from "../../../../modules/colors/controllers/CreateColorsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListColorsController} from "../../../../modules/colors/controllers/ListColorsController";

const colorsRoutes = Router();
const createColorsController = new CreateColorsController();
const listColorsController = new ListColorsController();

colorsRoutes.post("/", ensureAuthenticated, ensureAdmin, createColorsController.handle);
colorsRoutes.get("/", ensureAuthenticated, ensureAdmin, listColorsController.handle);

export { colorsRoutes };