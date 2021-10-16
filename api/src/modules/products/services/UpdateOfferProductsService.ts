import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    id: string;
    isOffer: boolean;
    discount: number;
}

@injectable()
class UpdateOfferProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, isOffer, discount }: IRequest): Promise<void> {
        return await this.productsRepository.updateOffer(id, isOffer, discount);
    }
}

export { UpdateOfferProductsService };