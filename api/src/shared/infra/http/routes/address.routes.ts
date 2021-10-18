import { Router } from "express";
import {CreateAddressController} from "../../../../modules/address/controllers/CreateAddressController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListAddressController} from "../../../../modules/address/controllers/ListAddressController";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const addressRoutes = Router();
const createAddressController = new CreateAddressController();
const listAddressController = new ListAddressController();

addressRoutes.post("/", ensureAuthenticated, createAddressController.handle);
addressRoutes.get("/", ensureAuthenticated, ensureAdmin, listAddressController.handle);

export { addressRoutes };