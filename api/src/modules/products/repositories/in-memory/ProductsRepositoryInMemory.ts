import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import {IProductsRepository} from "../IProductsRepository";
import {Product} from "../../entities/Product";

class ProductsRepositoryInMemory implements IProductsRepository{
    products: Product[] = [];

    async create({ id, name, description, stock, price, category_id, colors, materials }: ICreateProductDTO): Promise<Product> {
        const product = new Product();
        Object.assign(product, {
            id, name, description, stock, price, category_id, colors, materials
        });
        this.products.push(product);
        return product;
    }

    async findAvailable(name?: string, category_id?: string): Promise<Product[]> {
        return this.products.filter((product) => {
            if (
                product.available === true &&
                (name ? product.name === name : true) &&
                (category_id ? product.category_id === category_id : true)
            ) {
                return product;
            }
            return null;
        });
    }

    async findById(id: string): Promise<Product> {
        return this.products.find((product) => product.id === id);
    }

    async findByName(name: string): Promise<Product> {
        return this.products.find((product) => product.name === name);
    }

    async findProductByCategory(category_id: string): Promise<Product[]> {
        return this.products.filter((products) => {
            if (products.category_id === category_id) {
                return products;
            }
            return null;
        });
    }

    async updateAvailability(product_id: string, availability: boolean): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].available = availability;
    }

    async updateOffer(product_id: string, isOffer: boolean, discount: number): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].isOffer = isOffer;
        this.products[productIndex].discount = discount;
    }

    async updatePrice(product_id: string, price: number): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].price = price;
    }

    async updateStock(product_id: string, stock: number): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].stock = stock;
    }

    async list(): Promise<Product[]> {
        return this.products;
    }

    async findByIdAndAvailability(id: string, availability: boolean): Promise<Product> {
        return this.products.find((product) => [product.id === id && product.available === true]);
    }

}