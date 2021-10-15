import express, {NextFunction} from 'express';
import swaggerUi from "swagger-ui-express";
import 'reflect-metadata'
import '../typeorm';
import '../../container';

import "express-async-errors";
import {HandlingErrors} from "../../../middlewares/HandlingErrors";
import {createConnection} from "typeorm";

import swaggerFile from '../../../swagger.json';
import { router } from "./routes";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);


app.use(HandlingErrors);

app.listen(3333);