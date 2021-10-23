import { Router } from "express";
import {CreateDeliveryController} from "../../../../modules/deliveries/controllers/CreateDeliveryController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListDeliveriesController} from "../../../../modules/deliveries/controllers/ListDeliveriesController";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const deliveriesRoutes = Router();
const createDeliveryController = new CreateDeliveryController();
const listDeliveriesController = new ListDeliveriesController();

deliveriesRoutes.post("/", ensureAuthenticated, createDeliveryController.handle);
deliveriesRoutes.get("/", ensureAuthenticated, ensureAdmin, listDeliveriesController.handle);

export { deliveriesRoutes };