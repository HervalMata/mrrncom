import { Router } from "express";
import {CreateCouponController} from "../../../../modules/coupons/controllers/CreateCouponController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";

const couponsRoutes = Router();
const createCouponController = new CreateCouponController();

couponsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCouponController.handle);

export { couponsRoutes };