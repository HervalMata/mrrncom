import { Router } from "express";
import {CreateCouponController} from "../../../../modules/coupons/controllers/CreateCouponController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListCouponsController} from "../../../../modules/coupons/controllers/ListCouponsController";

const couponsRoutes = Router();
const createCouponController = new CreateCouponController();
const listCouponsController = new ListCouponsController();

couponsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCouponController.handle);
couponsRoutes.get("/", ensureAuthenticated, ensureAdmin, listCouponsController.handle);

export { couponsRoutes };