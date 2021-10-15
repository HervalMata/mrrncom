import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListColorsService} from "../services/ListColorsService";

class ListColorsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listColorsService = container.resolve(ListColorsService);
        const all = await listColorsService.execute();
        return res.json(all);
    }
}

export { ListColorsController };