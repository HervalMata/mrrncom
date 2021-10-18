import { Router } from "express";
import {CreateAddressController} from "../../../../modules/address/controllers/CreateAddressController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";

const addressRoutes = Router();
const createAddressController = new CreateAddressController();

addressRoutes.post("/", ensureAuthenticated, createAddressController.handle);

export { addressRoutes };