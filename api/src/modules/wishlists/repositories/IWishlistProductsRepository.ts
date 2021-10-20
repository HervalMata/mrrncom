import {ICreateWishlistProductsDTO} from "../dtos/ICreateWishlistProductsDTO";
import {WishlistProduct} from "../entities/WishlistProduct";
import {Wishlist} from "../entities/Wishlist";

interface IWishlistProductsRepository {
    create(data: ICreateWishlistProductsDTO): Promise<void>;
    findByWishlist(wishlist: Wishlist): Promise<WishlistProduct[]>;
}

export { IWishlistProductsRepository };