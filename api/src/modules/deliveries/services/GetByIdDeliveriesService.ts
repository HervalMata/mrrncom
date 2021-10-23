import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {Delivery} from "../entities/Delivery";
import {IDeliveryRepository} from "../repositories/IDeliveryRepository";

interface IRequest {
    id: string;
}

@injectable()
class GetByIdDeliveriesService {

    constructor(
        @inject("DeliveryRepository")
        private deliveryRepository: IDeliveryRepository
    ) {}

    async execute({ id }: IRequest): Promise<Delivery> {
        return await this.deliveryRepository.findById(id);
    }
}

export { GetByIdDeliveriesService };