import {Request, Response} from "express";
import {CreateColorsService} from "../services/CreateColorsService";
import {container} from "tsyringe";

class CreateColorsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const createColorsService = container.resolve(CreateColorsService);
        await createColorsService.execute({ name });
        return res.status(201).send();
    }
}

export { CreateColorsController };