import {Status, Type} from "../entities/Delivery";

interface ICreateDeliveryDTO {
    id?: string;
    postal_code?: string;
    type: Type;
    status: Status;
    cost: number;
    prize: number;
    address_id: string;
}

export { ICreateDeliveryDTO };