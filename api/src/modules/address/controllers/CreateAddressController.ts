import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateAddressService} from "../services/CreateAddressService";

class CreateAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, user_id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, country } = req.body;
        const createAddressService = container.resolve(CreateAddressService);
        await createAddressService.execute({ id, user_id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, country
        });
        return res.status(201).send();
    }
}

export { CreateAddressController };