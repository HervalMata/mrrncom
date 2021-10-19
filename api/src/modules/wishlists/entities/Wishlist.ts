import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import {User} from "../../accounts/entities/User";
import {WishlistProduct} from "./WishlistProduct";
import {v4 as uuidV4} from "uuid";

@Entity('wishlists')
class Wishlist {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(() => WishlistProduct, wishlistProduct => wishlistProduct.wishlist)
    wishlistProducts: WishlistProduct[];

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Wishlist };