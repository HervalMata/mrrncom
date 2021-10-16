import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";
import {AppError} from "../../../shared/errors/AppError";

interface IRequest {
    name: string;
    description: string;
    stock: number;
    price: number;
    category_id: string;
}

@injectable()
class CreateProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ name, description, stock, price, category_id }: IRequest): Promise<Product> {
        const productAlreadyExists = await this.productsRepository.findByName(name);
        if (productAlreadyExists) {
            throw new AppError("Product already exists");
        }
        return await this.productsRepository.create({
            name, description, stock, price, category_id
        });
    }

}

export { CreateProductsService };