import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryColumn,
    JoinColumn,
    ManyToMany,
    JoinTable,
    OneToMany
} from "typeorm";
import {Category} from "../../categories/entities/Category";
import {v4 as uuidV4} from "uuid";
import {Color} from "../../colors/entities/Color";
import {Material} from "../../materials/entities/Material";
import {WishlistProduct} from "../../wishlists/entities/WishlistProduct";

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

    @Column("int")
    stock: number;

    @Column("decimal")
    price: number;

    @Column()
    isOffer: boolean;

    @Column("decimal")
    discount: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id", })
    category: Category;

    @ManyToMany(() => Color)
    @JoinTable({
        name: "colors_products",
        joinColumns: [{ name: "product_id" }],
        inverseJoinColumns: [{ name: "color_id" }],
    })
    colors: Color[];

    @ManyToMany(() => Material)
    @JoinTable({
        name: "materials_products",
        joinColumns: [{ name: "product_id" }],
        inverseJoinColumns: [{ name: "material_id" }],
    })
    materials: Material[];

    @OneToMany(() => WishlistProduct, wishlistProduct => wishlistProduct.product)
    wishlistProducts: WishlistProduct[];

    @Column('int')
    alturaCM: number;

    @Column('int')
    larguraCM: number;

    @Column('int')
    profundidadeCM: number;

    @Column('int')
    pesoKg: number;

    @Column()
    freteGratis: boolean;

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