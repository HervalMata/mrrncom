import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, JoinColumn} from "typeorm";
import {Category} from "../../categories/entities/Category";
import {v4 as uuidV4} from "uuid";

@Entity("products")
class Product {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    available: boolean;

    @Column()
    stock: number;

    @Column()
    price: number;

    @Column()
    isOffer: boolean;

    @Column()
    discount: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id", })
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.available = true;
        }
    }
}

export { Product };