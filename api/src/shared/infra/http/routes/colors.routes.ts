import { Router } from "express";
import {CreateColorsController} from "../../../../modules/colors/controllers/CreateColorsController";

const colorsRoutes = Router();
const createColorsController = new CreateColorsController();

colorsRoutes.post("/", createColorsController.handle);

export { colorsRoutes };