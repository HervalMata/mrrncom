import { Router } from "express";
import {CreateAddressController} from "../../../../modules/address/controllers/CreateAddressController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListAddressController} from "../../../../modules/address/controllers/ListAddressController";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetAddressByUserController} from "../../../../modules/address/controllers/GetAddressByUserController";

const addressRoutes = Router();
const createAddressController = new CreateAddressController();
const listAddressController = new ListAddressController();
const getAddressByUserController = new GetAddressByUserController();

addressRoutes.post("/", ensureAuthenticated, createAddressController.handle);
addressRoutes.get("/", ensureAuthenticated, ensureAdmin, listAddressController.handle);
addressRoutes.get("/:user_id", ensureAuthenticated, getAddressByUserController.handle);

export { addressRoutes };