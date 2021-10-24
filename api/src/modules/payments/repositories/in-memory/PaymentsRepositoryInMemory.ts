import {IPaymentsRepository} from "../IPaymentsRepository";
import {ICreatePaymentDTO} from "../../dtos/ICreatePaymentDTO";
import {Method, Payment, Status} from "../../entities/Payment";

class PaymentsRepositoryInMemory implements IPaymentsRepository {
    payments: Payment[] = [];

    async create(data: ICreatePaymentDTO): Promise<void> {
        const { id, user_id, address_id, card, method, status, value, installments, pagseguroCode, payload } = data;
        const payment = new Payment();
        Object.assign(payment, {
            id, user_id, address_id, card, method, status, value, installments, pagseguroCode, payload
        });
        this.payments.push(payment);
    }

    async findByMethod(method: Method): Promise<Payment[]> {
        return this.payments.filter((payment) => payment.method === method);
    }

    async findByStatus(status: Status): Promise<Payment[]> {
        return this.payments.filter((payment) => payment.status === status);
    }

    async findByUser(user_id: string): Promise<Payment[]> {
        return this.payments.filter((payment) => payment.user_id === user_id);
    }

    async list(): Promise<Payment[]> {
        return this.payments;
    }

    async update({ id, status }: ICreatePaymentDTO): Promise<void> {
        const paymentIndex = this.payments.findIndex((payment) => payment.id === id);
        this.payments[paymentIndex].status = status;
    }

    async findById(id: string): Promise<Payment> {
        return this.payments.find((payment) => payment.id === id);
    }

}

export { PaymentsRepositoryInMemory };