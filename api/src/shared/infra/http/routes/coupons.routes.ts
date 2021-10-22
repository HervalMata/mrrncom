import { Router } from "express";
import {CreateCouponController} from "../../../../modules/coupons/controllers/CreateCouponController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListCouponsController} from "../../../../modules/coupons/controllers/ListCouponsController";
import {GetCouponController} from "../../../../modules/coupons/controllers/GetCouponController";
import {UpdateCouponsController} from "../../../../modules/coupons/controllers/UpdateCouponsController";

const couponsRoutes = Router();
const createCouponController = new CreateCouponController();
const listCouponsController = new ListCouponsController();
const getCouponController = new GetCouponController();
const updateCouponsController = new UpdateCouponsController();

couponsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCouponController.handle);
couponsRoutes.get("/", ensureAuthenticated, ensureAdmin, listCouponsController.handle);
couponsRoutes.get("/:id", getCouponController.handle);
couponsRoutes.put("/:id", ensureAuthenticated, ensureAdmin, updateCouponsController.handle);

export { couponsRoutes };