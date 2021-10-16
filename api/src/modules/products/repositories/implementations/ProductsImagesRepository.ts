import { ProductImage } from "../../entities/ProductImage";
import {IProductsImagesRepository} from "../IProductsImagesRepository";
import {getRepository, Repository} from "typeorm";

class ProductsImagesRepository implements IProductsImagesRepository {
    private repository: Repository<ProductImage>;

    constructor() {
        this.repository = getRepository(ProductImage);
    }

    async create(product_id: string, image_name: string): Promise<ProductImage> {
        const productImage = this.repository.create({ product_id, image_name })
        await this.repository.save(productImage);
        return productImage;
    }

}

export { ProductsImagesRepository };