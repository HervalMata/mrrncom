import {IWishlistProductsRepository} from "../IWishlistProductsRepository";
import {ICreateWishlistProductsDTO} from "../../dtos/ICreateWishlistProductsDTO";
import {Wishlist} from "../../entities/Wishlist";
import {WishlistProduct} from "../../entities/WishlistProduct";

class WishlistProductsRepositoryInMemory implements IWishlistProductsRepository {
    wishlist_product: WishlistProduct[] = [];

    async create({ wishlist, product }: ICreateWishlistProductsDTO): Promise<void> {
        const wishlist_products = new WishlistProduct();
        Object.assign(wishlist_products, {
            wishlist, product
        });
        this.wishlist_product.push(wishlist_products);
    }

    async findByWishlist(wishlist: Wishlist): Promise<WishlistProduct[]> {
        return this.wishlist_product.filter((wishlist_product) => wishlist_product.wishlist === wishlist);
    }

}

export { WishlistProductsRepositoryInMemory };