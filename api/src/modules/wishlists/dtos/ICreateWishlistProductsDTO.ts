import {Product} from "../../products/entities/Product";
import {Wishlist} from "../entities/Wishlist";

interface ICreateWishlistProductsDTO {
    product: Product;
    wishlist: Wishlist;
}

export { ICreateWishlistProductsDTO };