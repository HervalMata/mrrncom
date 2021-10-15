import { Router } from "express";
import {CreateMaterialsController} from "../../../../modules/materials/controllers/CreateMaterialsController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListMaterialsController} from "../../../../modules/materials/controllers/ListMaterialsController";

const materialsRoutes = Router();
const createMaterialsController = new CreateMaterialsController();
const listMaterialsController = new ListMaterialsController();

materialsRoutes.post("/", ensureAuthenticated, ensureAdmin, createMaterialsController.handle);
materialsRoutes.get("/", ensureAuthenticated, ensureAdmin, listMaterialsController.handle);


export { materialsRoutes };