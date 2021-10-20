import {ICreateWishlistDTO} from "../../dtos/ICreateWishlistDTO";
import {IWishlistsRepository} from "../IWishlistsRepository";
import {Wishlist} from "../../entities/Wishlist";

class WishlistsRepositoryInMemory implements IWishlistsRepository {
    wishlists: Wishlist[] = [];

    async create({ id, user_id, products }: ICreateWishlistDTO): Promise<void> {
        const wishlist = new Wishlist();
        Object.assign(wishlist, { id, user_id, products });
        this.wishlists.push(wishlist);
    }

    async findWishlistByUser(user_id: string): Promise<Wishlist> {
        return this.wishlists.find((wishlist) => wishlist.user_id === user_id );
    }

    async delete(id: string): Promise<any> {
        const wishlist = this.wishlists.findIndex((wishlist) => wishlist.id === id );
        return this.wishlists.splice(wishlist, 1);
    }

}

export { WishlistsRepositoryInMemory };