import { Router } from "express";
import {CreateUserController} from "../modules/accounts/controllers/CreateUserController";
import multer from "multer";
import uploadConfig from '../config/upload';
import {UpdateUserAvatarController} from "../modules/accounts/controllers/UpdateUserAvatarController";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./temp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export { usersRoutes };