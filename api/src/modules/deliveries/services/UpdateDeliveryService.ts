import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IDeliveryRepository} from "../repositories/IDeliveryRepository";
import {Status, Type} from "../entities/Delivery";

interface IRequest {
    id: string;
    postal_code: string;
    type: Type;
    status?: Status
    cost?: number;
    prize?: number;
    address_id: string;
}

@injectable()
class UpdateDeliveryService {

    constructor(
        @inject("DeliveryRepository")
        private deliveryRepository: IDeliveryRepository
    ) {}

    async execute({ id, postal_code, type, status, cost, prize, address_id }: IRequest): Promise<void> {
        return await this.deliveryRepository.update({id, postal_code, type, status, cost, prize, address_id });
    }
}

export { UpdateDeliveryService };