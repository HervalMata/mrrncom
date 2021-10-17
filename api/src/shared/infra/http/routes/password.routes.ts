import { Router } from "express";
import {SendForgotPasswordMailController} from "../../../../modules/accounts/controllers/SendForgotPasswordMailController";
import {ResetUsersPasswordController} from "../../../../modules/accounts/controllers/ResetUsersPasswordController";

const passwordRoutes = Router();
const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetUsersPasswordController = new ResetUsersPasswordController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetUsersPasswordController.handle);

export { passwordRoutes };