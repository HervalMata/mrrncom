import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {Delivery, Status } from "../entities/Delivery";
import {IDeliveryRepository} from "../repositories/IDeliveryRepository";

interface IRequest {
    status: Status;
}

@injectable()
class GetByStatusDeliveriesService {

    constructor(
        @inject("DeliveryRepository")
        private deliveryRepository: IDeliveryRepository
    ) {}

    async execute({ status }: IRequest): Promise<Delivery[]> {
        return await this.deliveryRepository.findByStatus(status);
    }
}

export { GetByStatusDeliveriesService };