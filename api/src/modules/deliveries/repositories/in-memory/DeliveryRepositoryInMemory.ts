import {IDeliveryRepository} from "../IDeliveryRepository";
import {ICreateDeliveryDTO} from "../../dtos/ICreateDeliveryDTO";
import {Delivery, Status, Type} from "../../entities/Delivery";

class DeliveryRepositoryInMemory implements IDeliveryRepository {
    deliveries: Delivery[] = [];

    async create(data: ICreateDeliveryDTO): Promise<void> {
        const { id, postal_code, type, status, cost, prize, address_id } = data;
        const delivery = new Delivery();
        Object.assign(delivery, {
            id, postal_code, type, status, cost, prize, address_id
        });
        this.deliveries.push(delivery);
    }

    async findById(id: string): Promise<Delivery> {
        return this.deliveries.find((delivery) => delivery.id === id);
    }

    async findByStatus(status: Status): Promise<Delivery[]> {
        return this.deliveries.filter((delivery) => delivery.status === status);
    }

    async findByType(type: Type): Promise<Delivery[]> {
        return this.deliveries.filter((delivery) => delivery.type === type);
    }

    async list(): Promise<Delivery[]> {
        return this.deliveries;
    }

    async update({ id, postal_code, type, status, cost, prize, address_id }: ICreateDeliveryDTO): Promise<void> {
        const deliveryIndex = this.deliveries.findIndex((delivery) => delivery.id === id);
        this.deliveries[deliveryIndex].postal_code = postal_code;
        this.deliveries[deliveryIndex].type = type;
        this.deliveries[deliveryIndex].status = status;
        this.deliveries[deliveryIndex].cost = cost;
        this.deliveries[deliveryIndex].prize = prize;
        this.deliveries[deliveryIndex].address_id = address_id;
    }

    async findByPostalCode(postal_code: string): Promise<Delivery> {
        return this.deliveries.find((delivery) => delivery.postal_code === postal_code);
    }
}

export { DeliveryRepositoryInMemory };