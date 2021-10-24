import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreatePaymentService} from "../services/CreatePaymentService";

class CreatePaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, user_id, address_id, card, method, status, value, installments, pagseguroCode, payload, senderHash, order } = req.body;
        const createPaymentService = container.resolve(CreatePaymentService);
        await createPaymentService.execute({ id, user_id, address_id, card, method, status, value, installments, pagseguroCode, payload, senderHash, order });
        return res.status(201).send();
    }
}

export { CreatePaymentController };