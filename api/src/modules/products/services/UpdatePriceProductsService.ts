import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    id: string;
    price: number;
}

@injectable()
class UpdatePriceProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, price }: IRequest): Promise<void> {
        return await this.productsRepository.updatePrice(id, price);
    }
}

export { UpdatePriceProductsService};