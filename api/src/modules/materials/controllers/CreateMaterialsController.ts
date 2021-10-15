import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateMaterialsService} from "../../materials/services/CreateMaterialsService";

class CreateMaterialsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const createMaterialsService = container.resolve(CreateMaterialsService);
        await createMaterialsService.execute({ name });
        return res.status(201).send();
    }
}

export { CreateMaterialsController };