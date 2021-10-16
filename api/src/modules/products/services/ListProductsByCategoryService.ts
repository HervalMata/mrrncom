import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

interface IRequest {
    category_id: string;
}

@injectable()
class ListProductsByCategoryService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ category_id }: IRequest): Promise<Product> {
        return await this.productsRepository.findProductByCategory(category_id);
    }
}

export { ListProductsByCategoryService };