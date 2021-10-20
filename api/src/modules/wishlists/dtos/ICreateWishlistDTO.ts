import {Product} from "../../products/entities/Product";

interface ICreateWishlistDTO {
    id?: string;
    user_id: string;
    products: Product[];
}

export { ICreateWishlistDTO };