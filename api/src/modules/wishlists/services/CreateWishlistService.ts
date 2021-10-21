import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IWishlistsRepository} from "../repositories/IWishlistsRepository";
import {ICreateWishlistDTO} from "../dtos/ICreateWishlistDTO";
import {IWishlistProductsRepository} from "../repositories/IWishlistProductsRepository";
import {IProductsRepository} from "../../products/repositories/IProductsRepository";

@injectable()
class CreateWishlistService {

    constructor(
        @inject("WishlistsRepository")
        private wishlistsRepository: IWishlistsRepository,
        @inject("WishlistsRepository")
        private wishlistProductsRepository: IWishlistProductsRepository,
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, user_id, products }: ICreateWishlistDTO): Promise<void> {
        const wishlist_old = await this.wishlistsRepository.findWishlistByUser(user_id);
        if (wishlist_old) {
            await this.wishlistsRepository.delete(wishlist_old.id);
        }
        await this.wishlistsRepository.create({id, user_id, products});
        const wishlist = await this.wishlistsRepository.findWishlistByUser(user_id);
        products.map((product_created) =>{
            const product = this.productsRepository.findById(product_created.id);
            // @ts-ignore
            this.wishlistProductsRepository.create({product, wishlist});
        });
    }
}

export { CreateWishlistService };