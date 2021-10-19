import { Router } from "express";
import {CreateReviewController} from "../../../../modules/reviews/controllers/CreateReviewController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";


const reviewsRoutes = Router();
const createReviewController = new CreateReviewController();

reviewsRoutes.post("/", ensureAuthenticated, createReviewController.handle);

export { reviewsRoutes };