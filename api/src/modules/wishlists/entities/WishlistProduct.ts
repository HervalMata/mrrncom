import {CreateDateColumn, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Product} from "../../products/entities/Product";
import {Wishlist} from "./Wishlist";

@Entity('wishlist_products')
class WishlistProduct {

    @ManyToOne(() => Wishlist, wishlist => wishlist.wishlistProducts, { primary: true })
    @JoinColumn({ name: "wishlist_id" })
    wishlist: Wishlist;

    @ManyToOne(() => Product, product => product.wishlistProducts, { primary: true })
    @JoinColumn({ name: "product_id" })
    product: Product;

    @CreateDateColumn()
    created_at: Date;
}

export { WishlistProduct };