import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IWishlistsRepository} from "../repositories/IWishlistsRepository";
import {IWishlistProductsRepository} from "../repositories/IWishlistProductsRepository";

interface IRequest {
    user_id: string;
}

@injectable()
class ListWishlistsService {

    constructor(
        @inject("WishlistsRepository")
        private wishlistsRepository: IWishlistsRepository,
        @inject("WishlistsRepository")
        private wishlistProductsRepository: IWishlistProductsRepository
    ) {}

    async execute({ user_id }: IRequest): Promise<any> {
        const wishlist = await this.wishlistsRepository.findWishlistByUser(user_id);
        await this.wishlistProductsRepository.findByWishlist(wishlist);
    }
}

export { ListWishlistsService };