import { Request, Response } from "express";

import { CreateCategoryService } from "../../services/CreateCategoryService";
import {container} from "tsyringe";

class CreateCategoryController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        const createCategoryService = container.resolve(CreateCategoryService);

        await createCategoryService.execute({ name, description });

        return res.status(201).send();
    }
}

export { CreateCategoryController };