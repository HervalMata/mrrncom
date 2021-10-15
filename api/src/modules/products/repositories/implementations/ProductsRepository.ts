import {IProductsRepository} from "../IProductsRepository";
import {ICreateProductDTO} from "../../dtos/ICreateProductDTO";
import { Product } from "../../entities/Product";

class ProductsRepository implements IProductsRepository{

    create(data: ICreateProductDTO): Promise<Product> {
        return Promise.resolve(undefined);
    }

    findAvailable(name?: string, category_id?: string): Promise<Product[]> {
        return Promise.resolve([]);
    }

    findById(id: string): Promise<Product> {
        return Promise.resolve(undefined);
    }

    findByName(name: string): Promise<Product> {
        return Promise.resolve(undefined);
    }

    findProductByCategory(category_id: string): Promise<Product> {
        return Promise.resolve(undefined);
    }

    updateAvailability(product_id: string, availability: boolean): Promise<void> {
        return Promise.resolve(undefined);
    }

    updateOffer(product_id: string, isOffer: boolean, discount: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    updatePrice(product_id: string, price: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    updateStock(product_id: string, stock: number): Promise<void> {
        return Promise.resolve(undefined);
    }

}

export { ProductsRepository };