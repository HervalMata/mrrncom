import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";


interface IRequest {
    id: string;
}

@injectable()
class GetAvailableProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id }: IRequest): Promise<Product> {
        return await this.productsRepository.findByIdAndAvailability(id, true);
    }
}

export { GetAvailableProductService };