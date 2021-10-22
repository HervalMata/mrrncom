import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IDeliveryRepository} from "../repositories/IDeliveryRepository";
import {ICreateDeliveryDTO} from "../dtos/ICreateDeliveryDTO";
import {AppError} from "../../../shared/errors/AppError";

@injectable()
class CreateDeliveryService {

    constructor(
        @inject("DeliveryRepository")
        private deliveryRepository: IDeliveryRepository
    ) {}

    async execute({ id, postal_code, type, status, cost, prize, address_id }: ICreateDeliveryDTO): Promise<void> {
        const deliveryAlreadyExists = await this.deliveryRepository.findByPostalCode(postal_code);
        if (deliveryAlreadyExists) {
            throw new AppError("Delivery already exists");
        }
        await this.deliveryRepository.create({ id, postal_code, type, status, cost, prize, address_id });
    }
}

export { CreateDeliveryService };