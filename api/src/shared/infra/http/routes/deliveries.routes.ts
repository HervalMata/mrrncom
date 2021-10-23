import { Router } from "express";
import {CreateDeliveryController} from "../../../../modules/deliveries/controllers/CreateDeliveryController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListDeliveriesController} from "../../../../modules/deliveries/controllers/ListDeliveriesController";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetByIdDeliveriesController} from "../../../../modules/deliveries/controllers/GetByIdDeliveriesController";

const deliveriesRoutes = Router();
const createDeliveryController = new CreateDeliveryController();
const listDeliveriesController = new ListDeliveriesController();
const getByIdDeliveriesController = new GetByIdDeliveriesController();

deliveriesRoutes.post("/", ensureAuthenticated, createDeliveryController.handle);
deliveriesRoutes.get("/", ensureAuthenticated, ensureAdmin, listDeliveriesController.handle);
deliveriesRoutes.get("/:id", ensureAuthenticated, getByIdDeliveriesController.handle);

export { deliveriesRoutes };