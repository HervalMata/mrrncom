import { Router } from "express";
import {CreateMaterialsController} from "../../../../modules/materials/controllers/CreateMaterialsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const materialsRoutes = Router();
const createMaterialsController = new CreateMaterialsController();

materialsRoutes.post("/", ensureAuthenticated, ensureAdmin, createMaterialsController.handle);


export { materialsRoutes };