import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListMaterialsService} from "../../materials/services/ListMaterialsService";

class ListMaterialsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listMaterialsService = container.resolve(ListMaterialsService);
        const all = await listMaterialsService.execute();
        return res.json(all);
    }
}

export { ListMaterialsController };