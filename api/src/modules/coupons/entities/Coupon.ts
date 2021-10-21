import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";

export enum Type {
    fixed,
    percentage
}

@Entity("coupons")
class Coupon {

    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column({ type: "enum", enum: Type })
    type: Type;

    @Column("int")
    value: number;

    @Column()
    expire_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Coupon };