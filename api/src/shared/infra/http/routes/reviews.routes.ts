import { Router } from "express";
import {CreateReviewController} from "../../../../modules/reviews/controllers/CreateReviewController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListReviewsController} from "../../../../modules/reviews/controllers/ListReviewsController";


const reviewsRoutes = Router();
const createReviewController = new CreateReviewController();
const listReviewsController = new ListReviewsController();

reviewsRoutes.post("/", ensureAuthenticated, createReviewController.handle);
reviewsRoutes.get("/", listReviewsController.handle);

export { reviewsRoutes };