import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, Unique} from "typeorm";
import {User} from "./User";
import {v4 as uuidV4} from "uuid";

@Entity("users_profile")
class UsersProfile {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    cpf: string;

    @Column()
    phone_number: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { UsersProfile };