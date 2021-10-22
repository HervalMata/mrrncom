import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {Address} from "../../address/entities/Address";
import {v4 as uuidV4} from "uuid";

export enum Type {
    post_offices,
    shipping_company,
    pick_up_on_site
}

export enum Status {
    packaging,
    deliver_the_carrier,
    on_way,
    delivered
}

@Entity("deliveries")
class Delivery {

    @PrimaryColumn()
    id: string;

    @Column()
    postal_code: string;

    @Column({ type: "enum", enum: Type })
    type: Type;

    @Column({ type: "enum", enum: Status })
    status: Status;

    @Column("decimal")
    cost: number;

    @Column("int")
    prize: number;

    @Column()
    address_id: string;

    @ManyToOne(() => Address)
    @JoinColumn({ name: "address_id" })
    address: Address;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Delivery };