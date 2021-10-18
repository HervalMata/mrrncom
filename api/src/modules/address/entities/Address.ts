import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from "../../accounts/entities/User";
import {v4 as uuidV4} from "uuid";

@Entity("users_tokens")
class Address {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    isBilling: boolean;

    @Column()
    isShipping: boolean;

    @Column()
    street: string;

    @Column()
    number: number;

    @Column()
    complement: string;

    @Column()
    district: string;

    @Column()
    postal_code: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Address };