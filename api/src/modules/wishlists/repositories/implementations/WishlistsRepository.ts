import {IWishlistsRepository} from "../IWishlistsRepository";
import {ICreateWishlistDTO} from "../../dtos/ICreateWishlistDTO";
import {Wishlist} from "../../entities/Wishlist";
import {getRepository, Repository} from "typeorm";

class WishlistsRepository implements IWishlistsRepository{
    private repository: Repository<Wishlist>;

    constructor() {
        this.repository = getRepository(Wishlist);
    }

    async create(data: ICreateWishlistDTO): Promise<void> {
        const { id, user_id, products } = data;
        const wishlist = this.repository.create({id, user_id, wishlistProducts: products});
        await this.repository.save(wishlist);
    }

    async findWishlistByUser(user_id: string): Promise<Wishlist> {
        return await this.repository.findOne({
            user_id: user_id
        });
    }

    async delete(id: string): Promise<any> {
        await this.repository.delete(id);
    }

}

export { WishlistsRepository };