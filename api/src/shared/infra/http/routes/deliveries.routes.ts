import { Router } from "express";
import {CreateDeliveryController} from "../../../../modules/deliveries/controllers/CreateDeliveryController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListDeliveriesController} from "../../../../modules/deliveries/controllers/ListDeliveriesController";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {GetByIdDeliveriesController} from "../../../../modules/deliveries/controllers/GetByIdDeliveriesController";
import {GetByTypeDeliveriesController} from "../../../../modules/deliveries/controllers/GetByTypeDeliveriesController";
import {GetByStatusDeliveriesController} from "../../../../modules/deliveries/controllers/GetByStatusDeliveriesController";

const deliveriesRoutes = Router();
const createDeliveryController = new CreateDeliveryController();
const listDeliveriesController = new ListDeliveriesController();
const getByIdDeliveriesController = new GetByIdDeliveriesController();
const getByTypeDeliveriesController = new GetByTypeDeliveriesController();
const getByStatusDeliveriesController = new GetByStatusDeliveriesController();

deliveriesRoutes.post("/", ensureAuthenticated, createDeliveryController.handle);
deliveriesRoutes.get("/", ensureAuthenticated, ensureAdmin, listDeliveriesController.handle);
deliveriesRoutes.get("/:id", ensureAuthenticated, getByIdDeliveriesController.handle);
deliveriesRoutes.get("/:type", ensureAuthenticated, ensureAdmin, getByTypeDeliveriesController.handle);
deliveriesRoutes.get("/:status", ensureAuthenticated, ensureAdmin, getByStatusDeliveriesController.handle);

export { deliveriesRoutes };