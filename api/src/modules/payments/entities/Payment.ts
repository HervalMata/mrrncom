import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {User} from "../../accounts/entities/User";
import {Address} from "../../address/entities/Address";
import {v4 as uuidV4} from "uuid";

export enum Method {
    boleto,
    creditCard
}

export enum Status {
    pending,
    in_analysis,
    payed,
    available,
    in_dispute,
    returned,
    cancelled
}

@Entity("payments")
class Payment {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    address_id: string;

    @ManyToOne(() => Address)
    @JoinColumn({ name: "address_id" })
    address: Address;

    @Column("json")
    card: Object;

    @Column("decimal")
    value: number;

    @Column("int")
    installments: number;

    @Column( { type: "enum", enum: Method })
    method: Method;

    @Column( { type: "enum", enum: Status })
    status: Status;

    @Column()
    pagseguroCode: string;

    @Column("string", { array: true })
    payload: string[];

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

export { Payment };