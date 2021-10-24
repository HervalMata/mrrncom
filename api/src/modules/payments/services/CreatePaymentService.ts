import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IPaymentsRepository} from "../repositories/IPaymentsRepository";
import {ICreatePaymentDTO} from "../dtos/ICreatePaymentDTO";
import {AppError} from "../../../shared/errors/AppError";
import {createPayment} from "../../../utils/pagseguro";

@injectable()
class CreatePaymentService {

    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository
    ) {}

    async execute({ id, user_id, address_id, card, method, status, value, installments, pagseguroCode, payload, senderHash, order }: ICreatePaymentDTO): Promise<void> {
        const paymentAlreadyExists = await this.paymentsRepository.findById(id);
        if (paymentAlreadyExists) {
            throw new AppError("Payment already exists");
        }
        //findOrderById

        const _payload = await createPayment(senderHash, order);
        // @ts-ignore
        payload = (payload) ? payload.concat([_payload]) : [ _payload ];
        // @ts-ignore
        if(payload.code) pagseguroCode = payload.code;
        await this.paymentsRepository.create({ id, user_id, address_id, card, method, status, value, installments, pagseguroCode, payload, senderHash, order });
    }
}

export { CreatePaymentService };