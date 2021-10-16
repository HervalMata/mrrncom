import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

interface IRequest {
    category_id?: string;
    name?: string;
}

@injectable()
class ListAvailableProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ name, category_id }: IRequest): Promise<Product[]> {
        return await this.productsRepository.findAvailable(name, category_id);
    }
}

export { ListAvailableProductsService };

