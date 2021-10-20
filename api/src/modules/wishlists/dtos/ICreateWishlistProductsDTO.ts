import {Product} from "../../products/entities/Product";
import {Wishlist} from "../entities/Wishlist";

interface ICreateWishlistProductsDTO {
    product: Promise<Product>;
    wishlist: Wishlist;
}

export { ICreateWishlistProductsDTO };