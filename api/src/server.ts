import express, {NextFunction} from 'express';
import swaggerUi from "swagger-ui-express";
import 'reflect-metadata'
import './database';
import './shared/container';

import { router } from "./routes";
import swaggerFile from './swagger.json';

import "express-async-errors";
import {AppError} from "./errors/AppError";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);


app.use(
    // @ts-ignore
    (
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ): Response => {
        if (err instanceof AppError) {
            // @ts-ignore
            return res.status(err.statusCode).json({
                message: err.message,
            });
        }
        // @ts-ignore
        return res.status(500).json({
            status: "error",
            message: `Internal server error: ${err.message}`,
        });
    }
);

app.listen(3333);