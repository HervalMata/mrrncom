import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    id: string;
    stock: number;
}

@injectable()
class UpdateStockProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, stock }: IRequest): Promise<void> {
        return await this.productsRepository.updateStock(id, stock);
    }
}

export { UpdateStockProductsService };