import express, {NextFunction} from 'express';
import swaggerUi from "swagger-ui-express";
import 'reflect-metadata'
import '../typeorm';
import '../../container';

import { router } from "./routes";
import swaggerFile from '../../../swagger.json';

import "express-async-errors";
import {AppError} from "../../../errors/AppError";
import {HandlingErrors} from "../../../middlewares/HandlingErrors";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);


app.use(HandlingErrors);

app.listen(3333);