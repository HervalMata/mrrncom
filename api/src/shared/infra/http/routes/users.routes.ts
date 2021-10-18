import { Router } from "express";
import {CreateUserController} from "../../../../modules/accounts/controllers/CreateUserController";
import multer from "multer";
import uploadConfig from '../../../../config/upload';
import {UpdateUserAvatarController} from "../../../../modules/accounts/controllers/UpdateUserAvatarController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListUsersController} from "../../../../modules/accounts/controllers/ListUsersController";
import {ActivateAdminUsersController} from "../../../../modules/accounts/controllers/ActivateAdminUsersController";
import {CreateUsersProfileController} from "../../../../modules/accounts/controllers/CreateUsersProfileController";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const listUsersController = new ListUsersController();
const activateAdminUsersController = new ActivateAdminUsersController();
const createUsersProfileController = new CreateUsersProfileController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, listUsersController.handle);
usersRoutes.patch("/activate/:id", ensureAuthenticated, ensureAdmin, activateAdminUsersController.handle);
usersRoutes.patch(
    "/avatar", ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);
usersRoutes.post("/profile", ensureAuthenticated, createUsersProfileController.handle);

export { usersRoutes };