import {ICreateProductDTO} from "../dtos/ICreateProductDTO";
import {Product} from "../entities/Product";

interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<void>;
    findByName(name: string): Promise<Product>;
    findById(id: string): Promise<Product>;
    findProductByCategory(category_id: string): Promise<Product[]>;
    findAvailable(name?: string, category_id?: string): Promise<Product[]>;
    updateAvailability(product_id: string, availability: boolean): Promise<void>;
    updateStock(product_id: string, stock: number): Promise<void>;
    updatePrice(product_id: string, price: number): Promise<void>;
    updateOffer(product_id: string, isOffer: boolean, discount: number): Promise<void>;
    list(): Promise<Product[]>;
    findByIdAndAvailability(id: string, availability: boolean): Promise<Product>;
}

export { IProductsRepository };