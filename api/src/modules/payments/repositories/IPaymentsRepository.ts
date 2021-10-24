import {ICreatePaymentDTO} from "../dtos/ICreatePaymentDTO";
import {Method, Payment, Status} from "../entities/Payment";

interface IPaymentsRepository {
    create(data: ICreatePaymentDTO): Promise<void>;
    list(): Promise<Payment[]>;
    findByUser(user_id: string): Promise<Payment[]>;
    findByStatus(status: Status): Promise<Payment[]>;
    findByMethod(method: Method): Promise<Payment[]>;
    update(data: ICreatePaymentDTO): Promise<void>;
    findById(id: string): Promise<Payment>;
}

export { IPaymentsRepository };