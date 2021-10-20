import {IWishlistProductsRepository} from "../IWishlistProductsRepository";
import {ICreateWishlistProductsDTO} from "../../dtos/ICreateWishlistProductsDTO";
import {WishlistProduct} from "../../entities/WishlistProduct";
import {getRepository, Repository} from "typeorm";
import {Wishlist} from "../../entities/Wishlist";

class WishlistProductsRepository implements IWishlistProductsRepository {
    private repository: Repository<WishlistProduct>;

    constructor() {
        this.repository = getRepository(WishlistProduct);
    }

    async create(data: ICreateWishlistProductsDTO): Promise<void> {
        const { wishlist, product } = data;
        const wishlist_product = this.repository.create({ wishlist, product });
        await this.repository.save(wishlist_product);
    }

    async findByWishlist(wishlist: Wishlist): Promise<WishlistProduct[]> {
        return await this.repository.find(wishlist);
    }

}

export { WishlistProductsRepository };