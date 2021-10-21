import {ICreateCouponDTO} from "../dtos/ICreateCouponDTO";
import {Coupon, Type} from "../entities/Coupon";

interface ICouponsRepository {
    create(data: ICreateCouponDTO): Promise<void>;
    list(): Promise<Coupon[]>;
    findById(id: string): Promise<Coupon>;
    findByType(type: Type): Promise<Coupon[]>;
    findByExpireDate(expire_date: Date): Promise<Coupon>;
    update(data: ICreateCouponDTO): Promise<void>;
}

export { ICouponsRepository };