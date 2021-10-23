import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {Delivery, Type} from "../entities/Delivery";
import {IDeliveryRepository} from "../repositories/IDeliveryRepository";

interface IRequest {
    type: Type;
}

@injectable()
class GetByTypeDeliveriesService {

    constructor(
        @inject("DeliveryRepository")
        private deliveryRepository: IDeliveryRepository
    ) {}

    async execute({ type }: IRequest): Promise<Delivery[]> {
        return await this.deliveryRepository.findByType(type);
    }
}

export { GetByTypeDeliveriesService };