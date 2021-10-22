import {ICreateDeliveryDTO} from "../dtos/ICreateDeliveryDTO";
import {Delivery, Status, Type} from "../entities/Delivery";

interface IDeliveryRepository {
    create(data: ICreateDeliveryDTO): Promise<void>;
    findById(id: string): Promise<Delivery>;
    findByType(type: Type): Promise<Delivery[]>;
    findByStatus(status: Status): Promise<Delivery[]>;
    list(): Promise<Delivery[]>;
    update(data: ICreateDeliveryDTO): Promise<void>;
    findByPostalCode(postal_code: string): Promise<Delivery>;
}

export { IDeliveryRepository };