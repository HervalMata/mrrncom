import { Router } from "express";
import {CreateReviewController} from "../../../../modules/reviews/controllers/CreateReviewController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListReviewsController} from "../../../../modules/reviews/controllers/ListReviewsController";
import {GetReviewsByProductController} from "../../../../modules/reviews/controllers/GetReviewsByProductController";


const reviewsRoutes = Router();
const createReviewController = new CreateReviewController();
const listReviewsController = new ListReviewsController();
const getReviewsByProductController = new GetReviewsByProductController();

reviewsRoutes.post("/", ensureAuthenticated, createReviewController.handle);
reviewsRoutes.get("/", listReviewsController.handle);
reviewsRoutes.get("/:product_id", getReviewsByProductController.handle);

export { reviewsRoutes };