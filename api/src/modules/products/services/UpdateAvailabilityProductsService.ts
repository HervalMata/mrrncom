import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    id: string;
    availability: boolean;
}

@injectable()
class UpdateAvailabilityProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, availability }: IRequest): Promise<void> {
        return await this.productsRepository.updateAvailability(id, availability);
    }
}

export { UpdateAvailabilityProductsService };