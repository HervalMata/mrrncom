import { ICreateCouponDTO } from "../../dtos/ICreateCouponDTO";
import {Coupon, Type} from "../../entities/Coupon";
import {ICouponsRepository} from "../ICouponsRepository";
import {getRepository, Repository} from "typeorm";

class CouponsRepository implements ICouponsRepository {
    private repository: Repository<Coupon>;

    constructor() {
        this.repository = getRepository(Coupon);
    }

    async create({ id, code, type, expire_date, value }: ICreateCouponDTO): Promise<void> {
        const coupon = this.repository.create({ id, code, type, expire_date, value });
        await this.repository.save(coupon);
    }

    async findByExpireDate(expire_date: Date): Promise<Coupon> {
        return await this.repository.findOne(expire_date);
    }

    async findById(id: string): Promise<Coupon> {
        return await this.repository.findOne(id);
    }

    async findByType(type: Type): Promise<Coupon[]> {
        return await this.repository.find({type});
    }

    async list(): Promise<Coupon[]> {
        return await this.repository.find();
    }

    async update({ id, code, type, expire_date, value }: ICreateCouponDTO): Promise<void> {
        await this.repository.createQueryBuilder()
            .update()
            .set({ type: type, value: value, expire_date: expire_date })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

}

export { CouponsRepository };