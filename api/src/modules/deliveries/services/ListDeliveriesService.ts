import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IDeliveryRepository} from "../repositories/IDeliveryRepository";
import {Delivery} from "../entities/Delivery";

@injectable()
class ListDeliveriesService {

    constructor(
        @inject("DeliveryRepository")
        private deliveryRepository: IDeliveryRepository
    ) {}

    async execute(): Promise<Delivery[]> {
        return await this.deliveryRepository.list();
    }
}

export { ListDeliveriesService };