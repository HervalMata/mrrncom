import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IProductsImagesRepository} from "../repositories/IProductsImagesRepository";

interface IRequest {
    product_id: string;
    images_name: string[];
}

@injectable()
class UploadProductImagesService {

    constructor(
        @inject("ProductsImagesRepository")
        private productsImagesRepository: IProductsImagesRepository
    ) {}

    async execute({ product_id, images_name }: IRequest): Promise<void> {
        images_name.map(async (image) => {
            await this.productsImagesRepository.create(product_id, image);
        });
    }
}

export { UploadProductImagesService };