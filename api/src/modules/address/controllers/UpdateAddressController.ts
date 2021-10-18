import {Request, Response} from "express";
import {UpdateAddressService} from "../services/UpdateAddressService";
import {container} from "tsyringe";

class UpdateAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, } = req.body;
        const updateAddressService = container.resolve(UpdateAddressService);
        await updateAddressService.execute({
            id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement,
        });
        return res.status(200).send();
    }
}

export { UpdateAddressController };