import {Method, Status} from "../entities/Payment";

interface ICreatePaymentDTO {
    id?: string;
    user_id: string;
    address_id: string;
    card: Array<string>;
    value: number;
    installments: number;
    method: Method;
    status: Status;
    pagseguroCode: string;
    payload: string[];
    senderHash: any;
    order: any;
}

export { ICreatePaymentDTO };