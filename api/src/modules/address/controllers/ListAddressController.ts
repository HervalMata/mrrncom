import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListAddressService} from "../services/ListAddressService";

class ListAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listAddressService = container.resolve(ListAddressService);
        const all = await listAddressService.execute();
        return res.json(all);
    }
}

export { ListAddressController };