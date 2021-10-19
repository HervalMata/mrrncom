import { Router } from "express";
import {CreateReviewController} from "../../../../modules/reviews/controllers/CreateReviewController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ListReviewsController} from "../../../../modules/reviews/controllers/ListReviewsController";
import {GetReviewsByProductController} from "../../../../modules/reviews/controllers/GetReviewsByProductController";
import {GetReviewsByUserController} from "../../../../modules/reviews/controllers/GetReviewsByUserController";


const reviewsRoutes = Router();
const createReviewController = new CreateReviewController();
const listReviewsController = new ListReviewsController();
const getReviewsByProductController = new GetReviewsByProductController();
const getReviewsByUserController = new GetReviewsByUserController();

reviewsRoutes.post("/", ensureAuthenticated, createReviewController.handle);
reviewsRoutes.get("/", listReviewsController.handle);
reviewsRoutes.get("/:product_id", getReviewsByProductController.handle);
reviewsRoutes.get("/:user_id", getReviewsByUserController.handle);

export { reviewsRoutes };